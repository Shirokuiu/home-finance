import SummaryModule from 'src/modules/SummaryModule/SummaryModule';
import TopCategoriesModule from 'src/modules/TopCategoriesModule/TopCategoriesModule';
import { DonutChart } from 'src/shared/components/charts';

import './dashboard-page.scss';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SummaryModule className="dashboard-page__summary" />
      <TopCategoriesModule />
      <DonutChart
        data={[
          { value: 1, name: 'test' },
          { value: 3, name: 'test2' },
          { value: 4, name: 'test2' },
        ]}
      />
    </div>
  );
}

export default DashboardPage;
