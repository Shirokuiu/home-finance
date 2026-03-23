export interface IncomeExpenseDataItem {
  readonly date: string;
  readonly income: number;
  readonly expenses: number;
}

export interface ExpenseBarDataItem {
  readonly month: string;
  readonly value: number;
}
