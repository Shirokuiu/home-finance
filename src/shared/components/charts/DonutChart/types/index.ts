export type DonutChartDataItem = Readonly<{
  name: string;
  value: number;
  color?: string;
}>;

export type DonutChartProps = Readonly<{
  data: DonutChartDataItem[];
  innerRadius?: number;
  outerRadius?: number;
  height?: number;
}>;
