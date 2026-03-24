export type IncomeExpenseDataItem = Readonly<{
  date: string;
  income: number;
  expenses: number;
}>;

export type IncomeExpenseLineChartProps = Readonly<{
  data: IncomeExpenseDataItem[];
  height?: number;
  incomeColor?: string;
  expensesColor?: string;
}>;
