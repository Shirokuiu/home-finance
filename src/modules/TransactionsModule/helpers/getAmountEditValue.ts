import {
  type AppTableEditableProps,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { TransactionAmountType } from 'src/shared/types/transactions';

export const getAmountEditValue: AppTableEditableProps<TransactionDataType>['getEditValue'] = (
  record,
) => `${record.amount.type === TransactionAmountType.Income ? '+' : '-'}${record.amount.value}`;
