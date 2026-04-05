import { Route, Routes } from 'react-router-dom';

import DashboardPage from 'src/pages/DashboardPage/DashboardPage';
import { PageRoutes } from 'src/shared/constants/routes';
import WrappedSvgSprite from 'src/shared/hocks/WrappedSvgSprite/WrappedSvgSprite';
import RootPage from 'src/pages/RootPage/RootPage';
import { lazy, Suspense } from 'react';

const TransactionsPage = lazy(() => import('src/pages/TransactionsPage/TransactionsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index} element={<RootPage />}>
          <Route index element={<DashboardPage />} />
          <Route
            element={
              <Suspense fallback={<>...</>}>
                <TransactionsPage />
              </Suspense>
            }
            path={PageRoutes.Transactions}
          />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
