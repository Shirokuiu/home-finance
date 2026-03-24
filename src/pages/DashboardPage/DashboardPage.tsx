import SummaryModule from 'src/modules/SummaryModule/SummaryModule';
import TopCategoriesModule from 'src/modules/TopCategoriesModule/TopCategoriesModule';
import { Flex } from 'antd';
import CategoryDonutChartModule from 'src/modules/CategoryDonutChartModule/CategoryDonutChartModule';

import './dashboard-page.scss';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SummaryModule className="dashboard-page__summary" />
      <Flex gap="24px">
        <CategoryDonutChartModule className="dashboard-page__donut-chart" />
        <TopCategoriesModule className="dashboard-page__top-categories" />
      </Flex>
    </div>
  );
}

export default DashboardPage;
