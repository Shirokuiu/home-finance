import { DateInputFormatConfig } from 'src/modules/TransactionsModule/constants';
import { format, isMatch, isValid, parse } from 'date-fns';

export const isStrictDateValue = (value: string) => {
  if (!isMatch(value, DateInputFormatConfig.Format)) {
    return false;
  }

  const parsedDate = parse(value, DateInputFormatConfig.Format, new Date());

  if (!isValid(parsedDate)) {
    return false;
  }

  return format(parsedDate, DateInputFormatConfig.Format) === value;
};
