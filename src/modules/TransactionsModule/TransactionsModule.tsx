import { Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TransactionsFilters from 'src/modules/TransactionsModule/components/TransactionsFilters/TransactionsFilters';
import { AppButtonAdd } from 'src/shared/components/AppButton';
import TransactionsTable from 'src/modules/TransactionsModule/components/TransactionsTable/TransactionsTable';

import './transactions-module.scss';

function TransactionsModule() {
  return (
    <div className="transactions-module">
      <Flex justify="space-between" className="transactions-module__row-top">
        <h2 className="tp-reset tp-18-20-600 transactions-module__title">Транзакции</h2>
        <AppButtonAdd icon={<PlusOutlined />} size="large" className="">
          Добавить
        </AppButtonAdd>
      </Flex>
      <TransactionsFilters className="transactions-module__filters" />
      <TransactionsTable />
    </div>
  );
}

export default TransactionsModule;
