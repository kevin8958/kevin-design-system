import { createContext, useContext, useMemo, useState } from 'react';
import AppToastViewport from '@/components/app/AppToastViewport';

const AppToastContext = createContext<App.ToastContextValue | null>(null);

const createToastId = () =>
  `app-toast-${Math.random().toString(36).slice(2, 10)}`;

export const useAppToast = () => {
  const context = useContext(AppToastContext);

  if (!context) {
    throw new Error('useAppToast must be used within AppToastProvider');
  }

  return context;
};

const AppToastProvider = ({
  children,
  placement = 'top-right',
  maxVisible = 4,
}: App.ToastProviderProps) => {
  const [toasts, setToasts] = useState<App.AppToastItem[]>([]);

  const contextValue = useMemo<App.ToastContextValue>(
    () => ({
      showToast: (toast) => {
        const id = toast.id ?? createToastId();
        setToasts((current) => [
          { ...toast, id },
          ...current,
        ].slice(0, maxVisible));

        return id;
      },
      dismissToast: (id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));
      },
      clearToasts: () => {
        setToasts([]);
      },
      toasts,
    }),
    [maxVisible, toasts],
  );

  return (
    <AppToastContext.Provider value={contextValue}>
      {children}
      <AppToastViewport
        onClose={contextValue.dismissToast}
        placement={placement}
        toasts={toasts}
      />
    </AppToastContext.Provider>
  );
};

export default AppToastProvider;
