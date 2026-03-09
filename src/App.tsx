import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Gnb from '@/components/layout/Gnb';
import Snb from '@/components/layout/Snb';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GettingStarted from '@/pages/GettingStarted';
import Components from '@/pages/Components';

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <Gnb isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <FlexWrapper
        items="start"
        gap={0}
        classes="relative! w-full max-w-7xl mx-auto min-h-[calc(100dvh-64px)]"
      >
        <Snb isOpen={isOpen} />
        <main className="flex flex-col flex-1 px-4 overflow-scroll pt-19">
          <Outlet />
        </main>
      </FlexWrapper>
    </div>
  );
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
