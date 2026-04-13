import {
  AppTableTransactionAmountColumn,
  AppTableTransactionCategoryColumn,
  AppTableTransactionDateColumn,
  AppTableTransactionDescriptionColumn,
} from 'src/shared/components/AppTable/constants';
import {
  AppTableCategoryCellDefault,
  renderDefaultAmountColumn,
} from 'src/shared/components/AppTable';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import { getAmountEditValue } from 'src/modules/TransactionsModule/helpers/getAmountEditValue';
import { applyAmountEditValue } from 'src/modules/TransactionsModule/helpers/applyAmountEditValue';
import { applyDateEditValue } from 'src/modules/TransactionsModule/helpers/applyDateEditValue';
import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';
import AppTableDateCellDefault from 'src/shared/components/AppTable/components/AppTableDateCellDefault/AppTableDateCellDefault';
import { AppButton } from 'src/shared/components/AppButton';
import SvgSpriteIcon from 'src/shared/components/SvgSpriteIcon/SvgSpriteIcon';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/constants';
import { CATEGORY_TABLE_OPTIONS } from 'src/modules/TransactionsModule/constants';

export const makeColumns = ({
  removedKeys,
  onRowRemove,
  onRowRestore,
}: {
  removedKeys: TransactionDataType['key'][];
  onRowRemove?: (key: TransactionDataType['key']) => void;
  onRowRestore?: (key: TransactionDataType['key']) => void;
}): AppTableColumn<TransactionDataType>[] => [
  {
    ...AppTableTransactionCategoryColumn,
    width: '350px',
    isActive: ({ key }) => !removedKeys.includes(key),
    render: (_, { key }) => (
      <>
        <AppTableCategoryCellDefault isActive={!removedKeys.includes(key)}>
          <AppSelect
            options={CATEGORY_TABLE_OPTIONS}
            defaultValue="CATEGORIES_FOOD"
            popupMatchSelectWidth={400}
            disabled={removedKeys.includes(key)}
            className="transactions-module__categpry-select"
          />
        </AppTableCategoryCellDefault>
      </>
    ),
  },
  {
    ...AppTableTransactionDescriptionColumn,
    editable: ({ key }) => !removedKeys.includes(key),
    isActive: ({ key }) => !removedKeys.includes(key),
  },
  {
    ...AppTableTransactionAmountColumn,
    width: '200px',
    editable: ({ key }) => !removedKeys.includes(key),
    isActive: ({ key }) => !removedKeys.includes(key),
    getEditValue: getAmountEditValue,
    applyEditValue: applyAmountEditValue,
    render: renderDefaultAmountColumn,
  },
  {
    ...AppTableTransactionDateColumn,
    width: '150px',
    editable: ({ key }) => !removedKeys.includes(key),
    isActive: ({ key }) => !removedKeys.includes(key),
    applyEditValue: applyDateEditValue,
    render: (value: TransactionDataType['date']) => <AppTableDateCellDefault value={value} />,
  },
  {
    key: 'options',
    dataIndex: 'options',
    width: '50px',
    render: (_, { key }) => (
      <>
        {removedKeys?.includes(key) ? (
          <AppButton
            icon={<SvgSpriteIcon id={SvgSpriteIconId.Restore} />}
            onClick={() => {
              onRowRestore?.(key);
            }}
          />
        ) : (
          <AppButton
            danger
            icon={<SvgSpriteIcon id={SvgSpriteIconId.Trash} />}
            onClick={() => {
              onRowRemove?.(key);
            }}
          />
        )}
      </>
    ),
  },
];
