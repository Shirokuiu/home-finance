import { Flex, Table, type TableProps } from 'antd';
import { DEFAULT_TRANSACTION_COLUMNS } from 'src/shared/components/AppTable/constants';
import {
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { PlusOutlined } from '@ant-design/icons';
import TransactionsFilters from 'src/modules/TransactionsModule/components/TransactionsFilters/TransactionsFilters';
import { AppButtonAdd } from 'src/shared/components/AppButton';

import './transactions-module.scss';

const mockDataSource: TableProps<TransactionDataType>['dataSource'] = [
  {
    key: '1',
    category: 'Еда',
    description: 'Описание',
    amount: {
      type: TransactionAmountType.Income,
      value: '1 299',
    },
    date: '12.01.2023',
  },
  {
    key: '2',
    category: 'Еда',
    description: 'Описание 2',
    amount: {
      type: TransactionAmountType.Expense,
      value: '1 299',
    },
    date: '11.01.2023',
  },
];

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
      <Table pagination={false} columns={DEFAULT_TRANSACTION_COLUMNS} dataSource={mockDataSource} />
    </div>
  );
}

export default TransactionsModule;
