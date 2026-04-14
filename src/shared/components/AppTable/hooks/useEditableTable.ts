import type { TableProps } from 'antd';
import { type AppTableCellProps, type AppTableColumn } from 'src/shared/components/AppTable/types';
import type { Key } from 'react';
import { useCallback, useMemo, useState } from 'react';

export const useEditableTable = <T extends { key: Key }>({
  initialDataSource = [],
  columns = [],
}: {
  initialDataSource?: TableProps<T>['dataSource'];
  columns?: AppTableColumn<T>[];
}) => {
  const [dataSource, setDataSource] = useState<NonNullable<TableProps<T>['dataSource']>>(
    initialDataSource ?? [],
  );

  const handleSave = useCallback((row: T) => {
    setDataSource((prevData) => {
      const newData = [...prevData];
      const index = newData.findIndex((item) => row.key === item.key);

      if (index < 0) {
        return prevData;
      }

      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });

      return newData;
    });
  }, []);

  const editableColumns: AppTableColumn<T>[] = useMemo(
    () =>
      columns?.map((col, columnIndex) => ({
        ...col,
        onCell: (record: T, rowIndex): AppTableCellProps<T> => {
          const baseCellProps = col.onCell?.(record, rowIndex) ?? {};
          const cellTitle = typeof col.title === 'function' ? '' : (col.title ?? '');
          const isEditable =
            typeof col.editable === 'function' ? col.editable(record) : col.editable;
          const isActive = typeof col.isActive === 'function' ? col.isActive(record) : col.isActive;

          return {
            ...baseCellProps,
            record,
            editable: isEditable,
            isActive,
            dataIndex: typeof col.dataIndex === 'string' ? col.dataIndex : String(col.key ?? ''),
            cellTitle,
            handleSave,
            getEditValue: col.getEditValue,
            applyEditValue: col.applyEditValue,
            rowIndex,
            columnIndex,
          };
        },
      })) ?? [],
    [columns, handleSave],
  );

  return {
    dataSource,
    editableColumns,
  };
};
