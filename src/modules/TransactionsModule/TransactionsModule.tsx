import { Flex } from 'antd';
import TransactionsFilters from 'src/modules/TransactionsModule/components/TransactionsFilters/TransactionsFilters';
import TransactionsTable from 'src/modules/TransactionsModule/components/TransactionsTable/TransactionsTable';
import TransactionsAdd from 'src/modules/TransactionsModule/components/TransactionsAdd/TransactionsAdd';

import './transactions-module.scss';

function TransactionsModule() {
  return (
    <div className="transactions-module">
      <Flex justify="space-between" className="transactions-module__row-top">
        <h2 className="tp-reset tp-18-20-600 transactions-module__title">Транзакции</h2>
        <TransactionsAdd />
      </Flex>
      <TransactionsFilters className="transactions-module__filters" />
      <TransactionsTable />
    </div>
  );
}

export default TransactionsModule;
