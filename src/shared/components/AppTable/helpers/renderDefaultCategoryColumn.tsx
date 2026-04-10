import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';
import { AppTableCategoryCellDefault } from 'src/shared/components/AppTable/index';

export const renderDefaultCategoryColumn: AppTableColumn<TransactionDataType>['render'] = (
  value: TransactionDataType['category'],
) => <AppTableCategoryCellDefault>{value}</AppTableCategoryCellDefault>;
