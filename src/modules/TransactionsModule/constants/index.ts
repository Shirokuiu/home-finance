import {
  AppTableTransactionAmountColumn,
  AppTableTransactionCategoryColumn,
  AppTableTransactionDateColumn,
  AppTableTransactionDescriptionColumn,
} from 'src/shared/components/AppTable/constants';
import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';

export const TRANSACTIONS_COLUMNS: AppTableColumn<TransactionDataType>[] = [
  AppTableTransactionCategoryColumn,
  { ...AppTableTransactionDescriptionColumn, editable: true },
  { ...AppTableTransactionAmountColumn, editable: true },
  { ...AppTableTransactionDateColumn, editable: true },
];
