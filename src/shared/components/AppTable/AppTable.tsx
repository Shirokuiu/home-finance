import { Table } from 'antd';
import { useEditableTable } from 'src/shared/components/AppTable/hooks';
import { DefaultEditableComponents } from 'src/shared/components/AppTable/constants';
import type { AppTableProps } from 'src/shared/components/AppTable/types';
import type { Key } from 'react';

function AppTable<T extends { key: Key }>({ dataSource, columns }: AppTableProps<T>) {
  const { dataSource: editableDataSource, editableColumns } = useEditableTable({
    initialDataSource: dataSource,
    columns,
  });

  return (
    <Table
      columns={editableColumns}
      dataSource={editableDataSource}
      components={DefaultEditableComponents}
      pagination={false}
    />
  );
}

export default AppTable;
