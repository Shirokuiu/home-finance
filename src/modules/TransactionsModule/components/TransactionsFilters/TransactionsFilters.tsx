import type { PropsWithCssClassName } from 'src/shared/types/shared';
import AppAutocomplete from 'src/shared/components/AppAutocomplete/AppAutocomplete';
import { Flex, type SelectProps } from 'antd';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';

import './transactions-filters.scss';

const CATEGORY_OPTIONS: SelectProps['options'] = [
  {
    label: 'Все категории',
    value: 'CATEGORIES_ALL',
  },
  {
    label: 'Еда',
    value: 'CATEGORIES_FOOD',
  },
];

const PERIOD_OPTIONS: SelectProps['options'] = [
  {
    label: 'С начала года',
    value: 'PERIOD_CURRENT_YEAR',
  },
  {
    label: 'За последние 7 дней',
    value: 'PERIOD_7DAYS',
  },
  {
    label: 'За последний месяц',
    value: 'PERIOD_MONTH',
  },
  {
    label: 'За последние 3 месяца',
    value: 'PERIOD_3MONTH',
  },
  {
    label: 'За последние пол года',
    value: 'PERIOD_6MONTH',
  },
  {
    label: 'За последний год',
    value: 'PERIOD_YEAR',
  },
  {
    label: 'За все время',
    value: 'PERIOD_ALL',
  },
];

function TransactionsFilters({ className = '' }: PropsWithCssClassName) {
  return (
    <div className={`transactions-filters ${className}`.trim()}>
      <Flex align="center" gap="10px">
        <div className="transactions-filters__autocomplete-wrap">
          <AppAutocomplete />
        </div>
        <Flex gap="10px" className="transactions-filters__options">
          <AppSelect
            className="transactions-filters__option-select"
            size="large"
            options={CATEGORY_OPTIONS}
            defaultValue="CATEGORIES_ALL"
          />
          <AppSelect
            className="transactions-filters__option-select"
            size="large"
            options={PERIOD_OPTIONS}
            defaultValue="PERIOD_CURRENT_YEAR"
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default TransactionsFilters;
