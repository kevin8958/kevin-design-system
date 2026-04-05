import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Gnb from '@/components/layout/Gnb';
import Snb from '@/components/layout/Snb';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GettingStarted from './pages/GettingStarted';
import Components from './pages/Components';
import Colors from '@/pages/components/foundation/colors/page';
import Typography from '@/pages/components/foundation/typography/page';
import ComponentButtonPage from '@/pages/components/action/button/ComponentButtonPage';
import ComponentDropdownPage from '@/pages/components/action/dropdown/ComponentDropdownPage';
import ComponentModalPage from './pages/components/action/modal/ComponentModalPage';
import ComponentDrawerPage from './pages/components/action/drawer/ComponentDrawerPage';
import ComponentTextInputPage from '@/pages/components/input/textinput/ComponentTextInputPage';
import ComponentCheckboxPage from '@/pages/components/input/checkbox/ComponentCheckboxPage';
import ComponentRadioPage from '@/pages/components/input/radio/ComponentRadioPage';
import ComponentSwitchPage from '@/pages/components/input/switch/ComponentSwitchPage';
import ComponentDatePickerPage from '@/pages/components/input/datepicker/ComponentDatePickerPage';
import ComponentUploadDropzonePage from '@/pages/components/input/uploadDropzone/ComponentUploadDropzonePage';
import ComponentPaginationPage from '@/pages/components/navigation/pagination/ComponentPaginationPage';
import ComponentTabsPage from '@/pages/components/navigation/tabs/ComponentTabsPage';
import ComponentBreadcrumbPage from '@/pages/components/navigation/breadcrumb/ComponentBreadcrumbPage';
import ComponentAvatarPage from '@/pages/components/dataDisplay/avatar/ComponentAvatarPage';

function BaseLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <Gnb isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {/* desktopHidden을 넘겨서 모바일에서만 작동하게 함 */}
      <Snb isOpen={isOpen} onClose={() => setIsOpen(false)} desktopHidden />
      <main className="w-full max-w-7xl mx-auto px-4 pt-4">
        <Outlet />
      </main>
    </div>
  );
}

function DocsLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <Gnb isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <FlexWrapper
        items="start"
        gap={0}
        classes="relative! w-full max-w-7xl mx-auto min-h-[calc(100dvh-64px)]"
      >
        <Snb isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <main className="flex flex-col flex-1 px-4 overflow-scroll pt-4">
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
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Route>

        <Route path="/components" element={<DocsLayout />}>
          <Route index element={<Components />} />
          {/* foundation */}
          <Route path="foundation/colors" element={<Colors />} />
          <Route path="foundation/typography" element={<Typography />} />
          {/* action */}
          <Route path="action/button" element={<ComponentButtonPage />} />
          <Route path="action/dropdown" element={<ComponentDropdownPage />} />
          <Route path="action/modal" element={<ComponentModalPage />} />
          <Route path="action/drawer" element={<ComponentDrawerPage />} />
          {/* input */}
          <Route path="input/textinput" element={<ComponentTextInputPage />} />
          <Route path="input/checkbox/*" element={<ComponentCheckboxPage />} />
          <Route path="input/radio/*" element={<ComponentRadioPage />} />
          <Route path="input/switch/*" element={<ComponentSwitchPage />} />
          <Route
            path="input/datepicker/*"
            element={<ComponentDatePickerPage />}
          />
          <Route
            path="input/uploadDropzone"
            element={<ComponentUploadDropzonePage />}
          />
          <Route
            path="navigation/pagination"
            element={<ComponentPaginationPage />}
          />
          <Route path="navigation/tabs" element={<ComponentTabsPage />} />
          <Route
            path="navigation/breadcrumb"
            element={<ComponentBreadcrumbPage />}
          />
          <Route path="dataDisplay/avatar" element={<ComponentAvatarPage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
export default App;
