import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import type { InputRef } from 'antd';
import type { FormInstance } from 'antd/es/form';

export const useEditableCellNavigation = <T>({
  editable,
  dataIndex,
  record,
  rowIndex,
  columnIndex,
  form,
  getEditValue,
}: {
  editable?: boolean;
  dataIndex: string;
  record: T;
  rowIndex?: number;
  columnIndex?: number;
  form: FormInstance;
  getEditValue?: (record: T) => string;
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing((prevEditing) => !prevEditing);

    const editValue = getEditValue?.(record) ?? String(record[dataIndex as keyof T] ?? '');

    form.setFieldsValue({ [dataIndex]: editValue });
  };

  const focusCell = (rowStep: -1 | 0 | 1, columnStep: -1 | 0 | 1) => {
    const cells = Array.from(
      document.querySelectorAll<HTMLElement>('[data-app-table-cell="true"]'),
    );
    const rowIndexes = cells
      .map((cell) => Number(cell.dataset.rowIndex))
      .filter((value) => !Number.isNaN(value));
    const columnIndexes = cells
      .map((cell) => Number(cell.dataset.columnIndex))
      .filter((value) => !Number.isNaN(value));

    if (rowIndexes.length === 0 || columnIndexes.length === 0) {
      return;
    }

    let nextRowIndex = rowIndex;
    let nextColumnIndex = columnIndex;
    const maxRowIndex = Math.max(...rowIndexes);
    const maxColumnIndex = Math.max(...columnIndexes);

    while (nextRowIndex != null && nextColumnIndex != null) {
      nextRowIndex += rowStep;
      nextColumnIndex += columnStep;

      if (
        nextRowIndex < 0 ||
        nextColumnIndex < 0 ||
        nextRowIndex > maxRowIndex ||
        nextColumnIndex > maxColumnIndex
      ) {
        return;
      }

      const nextCell = document.querySelector<HTMLElement>(
        `[data-app-table-cell="true"][data-row-index="${nextRowIndex}"][data-column-index="${nextColumnIndex}"]`,
      );

      if (nextCell) {
        nextCell.focus();

        return;
      }
    }
  };

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      editing ||
      rowIndex == null ||
      columnIndex == null ||
      event.target !== event.currentTarget
    ) {
      return;
    }

    if (editable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleEdit();

      return;
    }

    const directionsMap = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
    } as const;

    const nextCellStep = directionsMap[event.key as keyof typeof directionsMap];

    if (!nextCellStep) {
      return;
    }

    event.preventDefault();
    focusCell(nextCellStep[0], nextCellStep[1]);
  };

  const restoreCellFocus = () => {
    requestAnimationFrame(() => {
      cellRef.current?.focus();
    });
  };

  return {
    editing,
    inputRef,
    cellRef,
    toggleEdit,
    focusCell,
    handleNavigationKeyDown,
    restoreCellFocus,
  };
};
