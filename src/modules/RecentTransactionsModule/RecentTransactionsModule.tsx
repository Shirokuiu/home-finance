import { Flex, type TableProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { PageRoutes } from 'src/shared/constants/routes';
import { DEFAULT_TRANSACTION_COLUMNS } from 'src/shared/components/AppTable/constants';
import {
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { AppTable } from 'src/shared/components/AppTable';

import './recent-transaction-module.scss';

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

function RecentTransactionsModule() {
  return (
    <div className="recent-transaction-module">
      <Flex justify="space-between">
        <h2 className="tp-reset tp-18-20-600 recent-transaction-module__title">
          Последние операции
        </h2>
        <NavLink to={PageRoutes.Transactions} className="tp-link">
          Все операции
        </NavLink>
      </Flex>
      <AppTable columns={DEFAULT_TRANSACTION_COLUMNS} dataSource={mockDataSource} />
    </div>
  );
}

export default RecentTransactionsModule;
