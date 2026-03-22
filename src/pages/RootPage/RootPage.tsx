import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';
import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import { Outlet } from 'react-router-dom';
import MainHeaderModule from 'src/modules/MainHeaderModule/MainHeaderModule';

function RootPage() {
  return (
    <HelmetProvider>
      <PageLayout headerSlot={<MainHeaderModule />}>
        <Helmet>
          <title>Домашняя бухгалтерия</title>
        </Helmet>
        <CenterLayout>
          <Outlet />
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default RootPage;
