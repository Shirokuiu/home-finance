import { Route, Routes } from 'react-router-dom';

import MainPage from 'src/pages/MainPage/MainPage';
import { PageRoutes } from 'src/shared/constants/routes';
import WrappedSvgSprite from 'src/shared/hocks/WrappedSvgSprite/WrappedSvgSprite';

function App() {
  return (
    <>
      <Routes>
        <Route path={PageRoutes.Index}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <WrappedSvgSprite />
    </>
  );
}

export default App;
