import SummaryModule from 'src/modules/SummaryModule/SummaryModule';
import TopCategoriesModule from 'src/modules/TopCategoriesModule/TopCategoriesModule';

import './dashboard-page.scss';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SummaryModule className="dashboard-page__summary" />
      <TopCategoriesModule />
    </div>
  );
}

export default DashboardPage;
