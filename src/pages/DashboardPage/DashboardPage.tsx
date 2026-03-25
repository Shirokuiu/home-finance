import SummaryModule from 'src/modules/SummaryModule/SummaryModule';
import TopCategoriesModule from 'src/modules/TopCategoriesModule/TopCategoriesModule';
import { Flex } from 'antd';
import CategoryDonutChartModule from 'src/modules/CategoryDonutChartModule/CategoryDonutChartModule';
import CashflowChartModule from 'src/modules/CashflowChartModule/CashflowChartModule';
import RecentTransactionsModule from 'src/modules/RecentTransactionsModule/RecentTransactionsModule';

import './dashboard-page.scss';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SummaryModule className="dashboard-page__summary" />
      <Flex gap="24px" className="dashboard-page__charts-wrap">
        <CategoryDonutChartModule className="dashboard-page__donut-chart" />
        <TopCategoriesModule className="dashboard-page__top-categories" />
      </Flex>
      <CashflowChartModule className="dashboard-page__cashflow-chart" />
      <RecentTransactionsModule />
    </div>
  );
}

export default DashboardPage;
