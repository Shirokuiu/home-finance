import type {
  AppTableEditableProps,
  TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { normalizeDateInput } from 'src/modules/TransactionsModule/helpers/normalizeDateInput';

export const applyDateEditValue: AppTableEditableProps<TransactionDataType>['applyEditValue'] = (
  record,
  value,
) => ({
  ...record,
  date: normalizeDateInput({
    input: value,
    previousValue: record.date,
  }),
});
