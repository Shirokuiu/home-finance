import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { IncomeExpenseLineChartProps } from 'src/shared/components/charts/IncomeExpenseLineChart/types';
import { ChartDefaultConfig } from 'src/shared/components/charts/IncomeExpenseLineChart/constants';

function IncomeExpenseLineChart({
  data,
  height = ChartDefaultConfig.Height,
  incomeColor = ChartDefaultConfig.IncomeColor,
  expensesColor = ChartDefaultConfig.ExpensesColor,
}: IncomeExpenseLineChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 8 }}>
          <CartesianGrid stroke="#edf1f7" strokeDasharray="3 3" />
          <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: '#dfe6f1' }} />
          <YAxis tickLine={false} axisLine={{ stroke: '#dfe6f1' }} />
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e7e9ef' }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            name="Доходы"
            stroke={incomeColor}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            name="Расходы"
            stroke={expensesColor}
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeExpenseLineChart;
