import { AmountType } from 'src/modules/RecentTransactionsModule/types';

export const AmountTypeColorMap = {
  [AmountType.Income]: 'tp-color-green-500',
  [AmountType.Expense]: 'tp-color-red-500',
} as const;

export const AmountTypeSignMap = {
  [AmountType.Income]: '+',
  [AmountType.Expense]: '-',
} as const;
