import { Route, Routes } from 'react-router-dom';

import DashboardPage from 'src/pages/DashboardPage/DashboardPage';
import { PageRoutes } from 'src/shared/constants/routes';
import WrappedSvgSprite from 'src/shared/hocks/WrappedSvgSprite/WrappedSvgSprite';
import RootPage from 'src/pages/RootPage/RootPage';

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index} element={<RootPage />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
