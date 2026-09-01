import type { SelectProps } from 'antd';
import { TransactionAmountType } from 'src/shared/types/transactions';

export const CATEGORY_OPTIONS: SelectProps['options'] = [
  {
    label: 'Еда',
    value: 'CATEGORIES_FOOD',
  },
  {
    label: 'Развлечения',
    value: 'CATEGORIES_FUN',
  },
  {
    label: 'Квартплата',
    value: 'CATEGORIES_UTILITIES',
  },
  {
    label: 'Очень длинная категория Очень длинная категория Очень длинная категория',
    value: 'TEST',
  },
] as const;

export const TRANSACTION_TYPE_OPTIONS: SelectProps['options'] = [
  {
    value: TransactionAmountType.Expense,
    label: 'Расход',
  },
  {
    value: TransactionAmountType.Income,
    label: 'Доход',
  },
];
