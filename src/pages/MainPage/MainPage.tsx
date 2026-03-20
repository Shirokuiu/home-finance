import { Helmet, HelmetProvider } from 'react-helmet-async';

import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';

function MainPage() {
  return (
    <HelmetProvider>
      <PageLayout
      >
        <Helmet>
          <title>Домашняя бухгалтерия</title>
        </Helmet>
        <CenterLayout>
          <h1>Hello World</h1>
        </CenterLayout>
      </PageLayout>
    </HelmetProvider>
  );
}

export default MainPage;
