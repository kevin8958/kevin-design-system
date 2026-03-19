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
import ButtonPage from '@/pages/components/action/button/page';
import DropdownPage from '@/pages/components/action/dropdown/page';
import ComponentModalPage from './pages/components/action/modal/page';

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
          <Route path="action/button" element={<ButtonPage />} />
          <Route path="action/dropdown" element={<DropdownPage />} />
          <Route path="action/modal" element={<ComponentModalPage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
export default App;
