import { type TableProps } from 'antd';
import {
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { AppTable } from 'src/shared/components/AppTable';
import { TRANSACTIONS_COLUMNS } from 'src/modules/TransactionsModule/constants';

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

function TransactionsTable() {
  return <AppTable columns={TRANSACTIONS_COLUMNS} dataSource={mockDataSource} />;
}

export default TransactionsTable;
