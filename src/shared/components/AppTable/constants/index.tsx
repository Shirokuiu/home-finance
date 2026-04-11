import {
  TransactionAmountType,
  type AppTableColumn,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { AppTableEditableRow } from 'src/shared/components/AppTable/index';
import AppTableEditableCell from 'src/shared/components/AppTable/components/AppTableEditableCell/AppTableEditableCell';
import {
  renderDefaultAmountColumn,
  renderDefaultCategoryColumn,
} from 'src/shared/components/AppTable/helpers';

export const AmountTypeColorMap = {
  [TransactionAmountType.Income]: 'tp-color-green-500',
  [TransactionAmountType.Expense]: 'tp-color-red-500',
} as const;

export const AmountTypeSignMap = {
  [TransactionAmountType.Income]: '+',
  [TransactionAmountType.Expense]: '-',
} as const;

export const AppTableTransactionCategoryColumn: AppTableColumn<TransactionDataType> = {
  key: 'category',
  title: 'Категория',
  dataIndex: 'category',
} as const;

export const AppTableTransactionDescriptionColumn: AppTableColumn<TransactionDataType> = {
  key: 'description',
  title: 'Описание',
  dataIndex: 'description',
} as const;

export const AppTableTransactionAmountColumn: AppTableColumn<TransactionDataType> = {
  key: 'amount',
  title: 'Сумма',
  dataIndex: 'amount',
} as const;

export const AppTableTransactionDateColumn: AppTableColumn<TransactionDataType> = {
  key: 'date',
  title: 'Дата',
  dataIndex: 'date',
  render: (value: TransactionDataType['date']) => (
    <span className="tp-color-gray-300">{value}</span>
  ),
} as const;

export const DEFAULT_TRANSACTION_COLUMNS: AppTableColumn<TransactionDataType>[] = [
  { ...AppTableTransactionCategoryColumn, render: renderDefaultCategoryColumn },
  AppTableTransactionDescriptionColumn,
  { ...AppTableTransactionAmountColumn, render: renderDefaultAmountColumn },
  AppTableTransactionDateColumn,
];

export const DefaultEditableComponents = {
  body: {
    row: AppTableEditableRow,
    cell: AppTableEditableCell,
  },
} as const;
