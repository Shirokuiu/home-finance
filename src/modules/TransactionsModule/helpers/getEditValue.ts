import {
  type AppTableEditableProps,
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';

export const getEditValue: AppTableEditableProps<TransactionDataType>['getEditValue'] = (record) =>
  `${record.amount.type === TransactionAmountType.Income ? '+' : '-'}${record.amount.value}`;
