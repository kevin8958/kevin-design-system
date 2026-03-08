import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Gnb from '@/components/layout/Gnb';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GettingStarted from './pages/GettingStarted';
import Components from './pages/Components';

function AppLayout() {
  return (
    <div className="w-full min-h-screen">
      <Gnb />
      <FlexWrapper items="start" gap={0} classes="w-full">
        {/* <Snb /> */}
        <main className="flex flex-col flex-1 px-4 mx-auto overflow-scroll pt-19 max-w-7xl">
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
