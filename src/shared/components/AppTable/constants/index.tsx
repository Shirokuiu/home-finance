import { Flex } from 'antd';
import CategoryIcon from 'src/shared/components/CategoryIcon/CategoryIcon';
import {
  TransactionAmountType,
  type AppTableColumn,
  type TransactionDataType,
  type TransactionDataTypeAmount,
} from 'src/shared/components/AppTable/types';
import { AppTableEditableRow } from 'src/shared/components/AppTable/index';
import AppTableEditableCell from 'src/shared/components/AppTable/components/AppTableEditableCell/AppTableEditableCell';

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
  render: (value: TransactionDataType['category']) => (
    <Flex align="center">
      <CategoryIcon />
      {value}
    </Flex>
  ),
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
  render: ({ value, type }: TransactionDataTypeAmount) => {
    return (
      <span className={`tp-14-16-500 ${AmountTypeColorMap[type]}`}>
        {AmountTypeSignMap[type]}
        {value} ₽
      </span>
    );
  },
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
  AppTableTransactionCategoryColumn,
  AppTableTransactionDescriptionColumn,
  AppTableTransactionAmountColumn,
  AppTableTransactionDateColumn,
];

export const DefaultEditableComponents = {
  body: {
    row: AppTableEditableRow,
    cell: AppTableEditableCell,
  },
} as const;
