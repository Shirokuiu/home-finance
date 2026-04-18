import type { ObjectValues } from 'src/shared/types/shared';
import type { TableProps } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { HTMLAttributes, PropsWithChildren, ReactNode, TdHTMLAttributes } from 'react';

export const TransactionAmountType = {
  Income: 'income',
  Expense: 'expense',
} as const;

export type TransactionDataType = {
  key: string;
  category: string;
  description: string;
  amount: TransactionDataTypeAmount;
  date: string;
};

export type TransactionDataTypeAmount = {
  type: ObjectValues<typeof TransactionAmountType>;
  value: string;
};

export type AppTableProps<T> = Omit<TableProps<T>, 'columns'> & {
  columns?: AppTableColumn<T>[];
};

export type AppTableColumn<T = Record<string, unknown>> = ColumnType<T> & AppTableEditableProps<T>;

export type AppTableEditableProps<T> = {
  editable?: boolean | ((record: T) => boolean);
  isActive?: boolean | ((record: T) => boolean);
  hasEditableClassName?: boolean | ((record: T) => boolean);
  editControl?: 'input' | 'textarea';
  handleSave?: (record: T) => void;
  getEditValue?: (record: T) => string;
  applyEditValue?: (record: T, value: string) => T;
};

export type AppTableCellProps<T> = HTMLAttributes<HTMLElement> &
  TdHTMLAttributes<HTMLElement> & {
    cellTitle: ReactNode;
    columnIndex?: number;
    dataIndex: string;
    record: T;
    editable?: boolean;
    isActive?: boolean;
    hasEditableClassName?: boolean;
    editControl?: 'input' | 'textarea';
    rowIndex?: number;
    handleSave: (record: T) => void;
    getEditValue?: (record: T) => string;
    applyEditValue?: (record: T, value: string) => T;
  };

export type AppEditableCellProps<T> = PropsWithChildren<Readonly<AppTableCellProps<T>>>;
