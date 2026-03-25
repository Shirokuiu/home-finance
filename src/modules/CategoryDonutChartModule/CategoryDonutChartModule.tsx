import { DonutChart } from 'src/shared/components/charts';
import type { PropsWithCssClassName } from 'src/shared/types/shared';
import { Flex } from 'antd';

import './category-donut-chart-module.scss';

const donutChartMockData = [
  { value: 1, name: 'test' },
  { value: 3, name: 'test2' },
  { value: 4, name: 'test2' },
];

function CategoryDonutChartModule({ className = '' }: PropsWithCssClassName) {
  return (
    <Flex vertical className={`category-donut-chart-module ${className}`.trim()}>
      <h2 className="tp-reset tp-18-20-600 category-donut-chart-module__title">
        Распределение расходов
      </h2>
      <Flex vertical justify="center" className="category-donut-chart-module__chart-wrap">
        <DonutChart data={donutChartMockData} />
      </Flex>
    </Flex>
  );
}

export default CategoryDonutChartModule;
