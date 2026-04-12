import {
  TransactionAmountType,
  type TransactionDataTypeAmount,
} from 'src/shared/components/AppTable/types';
import { AmountRegex, SIGN_CAPTURE_GROUP_INDEX } from 'src/modules/TransactionsModule/constants';
import { isAmountSign } from 'src/modules/TransactionsModule/helpers/isAmountSign';

export const normalizeAmountInput = ({
  input,
  previousAmount,
}: {
  input: string;
  previousAmount: TransactionDataTypeAmount;
}): TransactionDataTypeAmount => {
  const explicitSign = input.match(AmountRegex.Sign)?.[SIGN_CAPTURE_GROUP_INDEX];
  const digits = input.replace(AmountRegex.Digits, '').replace(AmountRegex.LeadingZeroes, '');

  if (!digits) {
    return previousAmount;
  }

  if (Number(digits) === 0) {
    return previousAmount;
  }

  const typeBySignMap: Record<'+' | '-', TransactionDataTypeAmount['type']> = {
    '+': TransactionAmountType.Income,
    '-': TransactionAmountType.Expense,
  };

  const normalizedType = isAmountSign(explicitSign)
    ? typeBySignMap[explicitSign]
    : previousAmount.type;
  const normalizedValue = digits.replace(AmountRegex.Thousands, ' ');

  return {
    type: normalizedType,
    value: normalizedValue,
  };
};
