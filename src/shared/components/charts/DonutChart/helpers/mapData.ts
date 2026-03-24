import { DEFAULT_COLORS } from 'src/shared/components/charts/DonutChart/constants';
import type {
  DonutChartDataItem,
  DonutChartProps,
} from 'src/shared/components/charts/DonutChart/types';
import type { ChartData } from 'recharts/types/state/chartDataSlice';

export const mapData = (data: DonutChartProps['data']): ChartData<DonutChartDataItem> =>
  data.map((item, index) => ({
    ...item,
    color: item.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length],
  }));
