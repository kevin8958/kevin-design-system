import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Gnb from '@/components/layout/Gnb';

function AppLayout() {
  return (
    <div className="w-full min-h-screen">
      <Gnb />
      <FlexWrapper items="start" gap={0} classes="w-full">
        {/* <Snb /> */}
        <main className="flex flex-col flex-1 px-4 overflow-scroll pt-19">
          <Outlet />
        </main>
      </FlexWrapper>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
