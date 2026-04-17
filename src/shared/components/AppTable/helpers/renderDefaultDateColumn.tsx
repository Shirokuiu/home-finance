import type { AppTableColumn, TransactionDataType } from 'src/shared/components/AppTable/types';
import AppTableDateCellDefault from 'src/shared/components/AppTable/components/AppTableDateCellDefault/AppTableDateCellDefault';

export const renderDefaultDateColumn: AppTableColumn<TransactionDataType>['render'] = (
  value: TransactionDataType['date'],
) => <AppTableDateCellDefault value={value} />;
