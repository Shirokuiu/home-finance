import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { ExpenseBarDataItem } from 'src/shared/components/charts/types';

type ExpenseBarChartProps = {
  readonly data: ExpenseBarDataItem[];
  readonly height?: number;
  readonly barColor?: string;
};

function ExpenseBarChart({ data, height = 280, barColor = '#3699fa' }: ExpenseBarChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 12, left: 4, bottom: 8 }}>
          <CartesianGrid stroke="#edf1f7" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={{ stroke: '#dfe6f1' }} />
          <YAxis tickLine={false} axisLine={{ stroke: '#dfe6f1' }} />
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e7e9ef' }} />
          <Bar dataKey="value" fill={barColor} radius={[8, 8, 0, 0]} maxBarSize={42}>
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseBarChart;
