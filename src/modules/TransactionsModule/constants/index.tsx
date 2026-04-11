import {
  AppTableTransactionAmountColumn,
  AppTableTransactionCategoryColumn,
  AppTableTransactionDateColumn,
  AppTableTransactionDescriptionColumn,
} from 'src/shared/components/AppTable/constants';
import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import {
  AppTableCategoryCellDefault,
  renderDefaultAmountColumn,
} from 'src/shared/components/AppTable';
import { type SelectProps } from 'antd';
import { AppButton } from 'src/shared/components/AppButton';
import SvgSpriteIcon from 'src/shared/components/SvgSpriteIcon/SvgSpriteIcon';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/constants';

export const CATEGORY_OPTIONS: SelectProps['options'] = [
  {
    label: 'Все категории',
    value: 'CATEGORIES_ALL',
  },
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

export const CATEGORY_TABLE_OPTIONS: SelectProps['options'] = [
  {
    label: 'Еда',
    value: 'CATEGORIES_FOOD',
  },
  {
    label: 'Развлечения',
    value: 'CATEGORIES_FUN',
  },
  {
    label: 'Очень длинная категория Очень длинная категория Очень длинная категория',
    value: 'TEST',
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
    width: '350px',
    render: () => (
      <>
        <AppTableCategoryCellDefault>
          <AppSelect
            options={CATEGORY_TABLE_OPTIONS}
            defaultValue="CATEGORIES_FOOD"
            popupMatchSelectWidth={400}
            className="transactions-module__categpry-select"
          />
        </AppTableCategoryCellDefault>
      </>
    ),
  },
  { ...AppTableTransactionDescriptionColumn, editable: true },
  {
    ...AppTableTransactionAmountColumn,
    width: '200px',
    editable: true,
    getEditValue: (record) => record.amount.value,
    applyEditValue: (record, value) => ({
      ...record,
      amount: {
        ...record.amount,
        value,
      },
    }),
    render: renderDefaultAmountColumn,
  },
  { ...AppTableTransactionDateColumn, width: '150px', editable: true },
  {
    key: 'options',
    dataIndex: 'options',
    width: '50px',
    render: () => <AppButton danger icon={<SvgSpriteIcon id={SvgSpriteIconId.Trash} />} />,
  },
] as const;
