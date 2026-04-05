import './transactions-module.scss';
import { Table, type TableProps } from 'antd';
import { DEFAULT_TRANSACTION_COLUMNS } from 'src/shared/components/AppTable/constants';
import {
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';

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
      <h2 className="tp-reset tp-18-20-600 transactions-module__title">Транзакции</h2>
      <Table pagination={false} columns={DEFAULT_TRANSACTION_COLUMNS} dataSource={mockDataSource} />
    </div>
  );
}

export default TransactionsModule;
