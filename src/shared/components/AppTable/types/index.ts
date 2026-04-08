import type { ObjectValues } from 'src/shared/types/shared';
import type { TableProps } from 'antd';

export const TransactionAmountType = {
  Income: 'income',
  Expense: 'expense',
} as const;

export type TransactionDataType = {
  key: string;
  category: string;
  description: string;
  amount: TransactionDataTypeAmount;
  date: string;
};

export type TransactionDataTypeAmount = {
  type: ObjectValues<typeof TransactionAmountType>;
  value: string;
};

export type AppTableColumn<T = Record<string, unknown>> = NonNullable<
  TableProps<T>['columns']
>[number];
