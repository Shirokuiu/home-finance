import { type TableProps } from 'antd';
import {
  TransactionAmountType,
  type TransactionDataType,
} from 'src/shared/components/AppTable/types';
import { AppTable } from 'src/shared/components/AppTable';
import { useMemo, useState } from 'react';
import { makeColumns } from 'src/modules/TransactionsModule/helpers';

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
  const [removedRowKeys, setRemovedRowKeys] = useState<TransactionDataType['key'][]>([]);

  const columns = useMemo(
    () =>
      makeColumns({
        removedKeys: removedRowKeys,
        onRowRemove: (key) => {
          setRemovedRowKeys((prevKeys) => [...prevKeys, key]);
        },
        onRowRestore: (key) => {
          setRemovedRowKeys((prevKeys) => prevKeys.filter((prevKey) => prevKey !== key));
        },
      }),
    [removedRowKeys],
  );

  return <AppTable columns={columns} dataSource={mockDataSource} />;
}

export default TransactionsTable;
