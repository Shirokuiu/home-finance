import {
  type AppTableEditableProps,
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';

export const getAmountEditValue: AppTableEditableProps<TransactionDataType>['getEditValue'] = (
  record,
) => `${record.amount.type === TransactionAmountType.Income ? '+' : '-'}${record.amount.value}`;
