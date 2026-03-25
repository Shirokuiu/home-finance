import type { ObjectValues } from 'src/shared/types/shared';

export const AmountType = {
  Income: 'income',
  Expense: 'expense',
} as const;

export type DataType = {
  key: string;
  category: string;
  description: string;
  amount: DataTypeAmount;
  date: string;
};

export type DataTypeAmount = {
  type: ObjectValues<typeof AmountType>;
  value: string;
};
