import { Flex, Table, type TableProps } from 'antd';
import {
  AmountType,
  type DataType,
  type DataTypeAmount,
} from 'src/modules/RecentTransactionsModule/types';
import {
  AmountTypeColorMap,
  AmountTypeSignMap,
} from 'src/modules/RecentTransactionsModule/constants';
import { NavLink } from 'react-router-dom';
import CategoryIcon from 'src/shared/components/CategoryIcon/CategoryIcon';

import './recent-transaction-module.scss';

const mockColumns: TableProps<DataType>['columns'] = [
  {
    key: '1',
    title: 'Категория',
    dataIndex: 'category',
    render: (value) => (
      <Flex align="center">
        <CategoryIcon />
        {value}
      </Flex>
    ),
  },
  {
    key: '2',
    title: 'Описание',
    dataIndex: 'description',
  },
  {
    key: '3',
    title: 'Сумма',
    dataIndex: 'amount',
    render: ({ value, type }: DataTypeAmount) => {
      return (
        <span className={`tp-14-16-500 ${AmountTypeColorMap[type]}`}>
          {AmountTypeSignMap[type]}
          {value} ₽
        </span>
      );
    },
  },
  {
    key: '4',
    title: 'Дата',
    dataIndex: 'date',
    render: (value) => <span className="tp-color-gray-300">{value}</span>,
  },
];

const mockDataSource: TableProps<DataType>['dataSource'] = [
  {
    key: '1',
    category: 'Еда',
    description: 'Описание',
    amount: {
      type: AmountType.Income,
      value: '1 299',
    },
    date: '12.01.2023',
  },
  {
    key: '2',
    category: 'Еда',
    description: 'Описание 2',
    amount: {
      type: AmountType.Expense,
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
        <NavLink to="#" className="tp-link">
          Все операции
        </NavLink>
      </Flex>
      <Table pagination={false} columns={mockColumns} dataSource={mockDataSource} />
    </div>
  );
}

export default RecentTransactionsModule;
