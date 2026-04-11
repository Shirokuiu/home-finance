import type {
  AppTableColumn,
  TransactionDataType,
  TransactionDataTypeAmount,
} from 'src/shared/components/AppTable/types';
import AppTableAmountCellDefault from 'src/shared/components/AppTable/components/AppTableAmountCellDefault/AppTableAmountCellDefault';

export const renderDefaultAmountColumn: AppTableColumn<TransactionDataType>['render'] = ({
  type,
  value,
}: TransactionDataTypeAmount) => <AppTableAmountCellDefault type={type} value={value} />;
