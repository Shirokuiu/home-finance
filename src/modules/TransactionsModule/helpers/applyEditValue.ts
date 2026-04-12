import type {
  AppTableEditableProps,
  TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { normalizeAmountInput } from 'src/modules/TransactionsModule/helpers/normalizeAmountInput';

export const applyEditValue: AppTableEditableProps<TransactionDataType>['applyEditValue'] = (
  record,
  value,
) => ({
  ...record,
  amount: normalizeAmountInput({
    input: value,
    previousAmount: record.amount,
  }),
});
