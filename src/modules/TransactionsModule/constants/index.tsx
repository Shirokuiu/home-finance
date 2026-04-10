import {
  AppTableTransactionAmountColumn,
  AppTableTransactionCategoryColumn,
  AppTableTransactionDateColumn,
  AppTableTransactionDescriptionColumn,
} from 'src/shared/components/AppTable/constants';
import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import { AppTableCategoryCellDefault } from 'src/shared/components/AppTable';
import type { SelectProps } from 'antd';

export const CATEGORY_OPTIONS: SelectProps['options'] = [
  {
    label: 'Все категории',
    value: 'CATEGORIES_ALL',
  },
  {
    label: 'Еда',
    value: 'CATEGORIES_FOOD',
  },
] as const;

export const CATEGORY_TABLE_OPTIONS: SelectProps['options'] = [
  {
    label: 'Еда',
    value: 'CATEGORIES_FOOD',
  },
  {
    label: 'Развлечения',
    value: 'CATEGORIES_FUN',
  },
] as const;

export const PERIOD_OPTIONS: SelectProps['options'] = [
  {
    label: 'С начала года',
    value: 'PERIOD_CURRENT_YEAR',
  },
  {
    label: 'За последние 7 дней',
    value: 'PERIOD_7DAYS',
  },
  {
    label: 'За последний месяц',
    value: 'PERIOD_MONTH',
  },
  {
    label: 'За последние 3 месяца',
    value: 'PERIOD_3MONTH',
  },
  {
    label: 'За последние пол года',
    value: 'PERIOD_6MONTH',
  },
  {
    label: 'За последний год',
    value: 'PERIOD_YEAR',
  },
  {
    label: 'За все время',
    value: 'PERIOD_ALL',
  },
] as const;

export const TRANSACTIONS_COLUMNS: AppTableColumn<TransactionDataType>[] = [
  {
    ...AppTableTransactionCategoryColumn,
    render: () => (
      <>
        <AppTableCategoryCellDefault>
          <AppSelect options={CATEGORY_TABLE_OPTIONS} defaultValue="CATEGORIES_FOOD" />
        </AppTableCategoryCellDefault>
      </>
    ),
  },
  { ...AppTableTransactionDescriptionColumn, editable: true },
  { ...AppTableTransactionAmountColumn, editable: true },
  { ...AppTableTransactionDateColumn, editable: true },
];
