import { DateInputFormatConfig } from 'src/modules/TransactionsModule/constants';
import { completeDateWithPreviousParts } from 'src/modules/TransactionsModule/helpers/completeDateWithPreviousParts';
import { isStrictDateValue } from 'src/modules/TransactionsModule/helpers/isStrictDateValue';

export const normalizeDateInput = ({
  input,
  previousValue,
}: {
  input: string;
  previousValue: string;
}): string => {
  const trimmedInput = input
    .trim()
    .replace(DateInputFormatConfig.Regex.SeparatorNormalize, '.')
    .replace(DateInputFormatConfig.Regex.SeparatorSpacesNormalize, '.');

  if (!trimmedInput) {
    return previousValue;
  }

  const previousDateParts = previousValue.match(DateInputFormatConfig.Regex.FullDate);

  if (!previousDateParts) {
    return previousValue;
  }

  const previousMonth = previousDateParts[DateInputFormatConfig.GroupIndex.Month];
  const previousYear = previousDateParts[DateInputFormatConfig.GroupIndex.Year];
  const preparedInput = completeDateWithPreviousParts({
    input: trimmedInput,
    previousMonth,
    previousYear,
  });

  if (!isStrictDateValue(preparedInput)) {
    return previousValue;
  }

  return preparedInput;
};
