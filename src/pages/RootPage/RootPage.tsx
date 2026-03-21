import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';
import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import { Outlet } from 'react-router-dom';
import MainHeader from 'src/modules/MainHeader/MainHeader';

function RootPage() {
  return (
    <HelmetProvider>
      <PageLayout headerSlot={<MainHeader />}>
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
