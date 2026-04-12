import { DateInputFormatConfig } from 'src/modules/TransactionsModule/constants';

export const completeDateWithPreviousParts = ({
  input,
  previousMonth,
  previousYear,
}: {
  input: string;
  previousMonth: string;
  previousYear: string;
}) => {
  const dayMonthParts = input.match(DateInputFormatConfig.Regex.DayMonth);

  if (dayMonthParts) {
    return `${dayMonthParts[DateInputFormatConfig.GroupIndex.Day]}.${dayMonthParts[DateInputFormatConfig.GroupIndex.Month]}.${previousYear}`;
  }

  const dayOnlyParts = input.match(DateInputFormatConfig.Regex.DayOnly);

  if (dayOnlyParts) {
    return `${dayOnlyParts[DateInputFormatConfig.GroupIndex.Day]}.${previousMonth}.${previousYear}`;
  }

  const dayYearWithoutMonthParts = input.match(DateInputFormatConfig.Regex.DayYearWithoutMonth);

  if (dayYearWithoutMonthParts) {
    return `${dayYearWithoutMonthParts[DateInputFormatConfig.GroupIndex.Day]}.${previousMonth}.${dayYearWithoutMonthParts[DateInputFormatConfig.GroupIndex.YearWithoutMonth]}`;
  }

  return input;
};
