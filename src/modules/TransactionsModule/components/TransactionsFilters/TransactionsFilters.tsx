import type { PropsWithCssClassName } from 'src/shared/types/shared';
import AppAutocomplete from 'src/shared/components/AppAutocomplete/AppAutocomplete';
import { Flex } from 'antd';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import { PERIOD_OPTIONS } from 'src/modules/TransactionsModule/constants';
import TransactionsFilterCategories from 'src/modules/TransactionsModule/components/TransactionsFilterCategories/TransactionsFilterCategories';

import './transactions-filters.scss';

function TransactionsFilters({ className = '' }: PropsWithCssClassName) {
  return (
    <div className={`transactions-filters ${className}`.trim()}>
      <Flex align="center" gap="10px">
        <div className="transactions-filters__autocomplete-wrap">
          <AppAutocomplete />
        </div>
        <Flex gap="10px" className="transactions-filters__options">
          <TransactionsFilterCategories />
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
