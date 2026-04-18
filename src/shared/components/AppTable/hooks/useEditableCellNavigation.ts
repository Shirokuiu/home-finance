import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import type { FormInstance } from 'antd/es/form';

type EditableControlRef = {
  focus: () => void;
} | null;

const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  '[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[role="button"]',
  '[role="combobox"]',
].join(', ');

const isOpenSelectTarget = (target: HTMLElement | null) =>
  Boolean(
    target?.closest('.ant-select-open') ||
      target?.closest<HTMLElement>('[role="combobox"][aria-expanded="true"]'),
  );

export const useEditableCellNavigation = <T>({
  children,
  editable,
  dataIndex,
  record,
  rowIndex,
  columnIndex,
  form,
  getEditValue,
}: {
  children: ReactNode;
  editable?: boolean;
  dataIndex: string;
  record: T;
  rowIndex?: number;
  columnIndex?: number;
  form: FormInstance;
  getEditValue?: (record: T) => string;
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<EditableControlRef>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const tdRef = useRef<HTMLTableCellElement>(null);
  const [isNavigable, setIsNavigable] = useState(Boolean(editable));

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();

      requestAnimationFrame(() => {
        const editableElement = tdRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          'input, textarea',
        );

        if (!editableElement) {
          return;
        }

        const caretPosition = editableElement.value.length;

        editableElement.setSelectionRange(caretPosition, caretPosition);
      });
    }
  }, [editing]);

  useEffect(() => {
    if (editable) {
      return;
    }

    const tdElement = tdRef.current;

    if (!tdElement) {
      return;
    }

    const updateNavigableState = () => {
      const hasFocusableChild = Boolean(tdElement.querySelector<HTMLElement>(FOCUSABLE_SELECTOR));

      setIsNavigable(hasFocusableChild);
    };

    const frameId = requestAnimationFrame(updateNavigableState);
    const observer = new MutationObserver(updateNavigableState);

    observer.observe(tdElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [children, editable]);

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

      const nextCell = document.querySelector<HTMLTableCellElement>(
        `[data-app-table-cell="true"][data-row-index="${nextRowIndex}"][data-column-index="${nextColumnIndex}"]`,
      );

      if (nextCell) {
        const nextFocusableElement = nextCell.querySelector<HTMLElement>(
          '[data-app-table-focus-target="true"]',
        );
        const nextInteractiveElement = nextCell.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);

        (nextFocusableElement ?? nextInteractiveElement)?.focus();

        return;
      }
    }
  };

  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLTableCellElement>) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    const isCellFocusTarget = target?.dataset.appTableFocusTarget === 'true';
    const isInteractiveChild =
      Boolean(target?.closest(FOCUSABLE_SELECTOR)) && !isCellFocusTarget;

    if (editing || rowIndex == null || columnIndex == null) {
      return;
    }

    if (editable && isCellFocusTarget && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      toggleEdit();

      return;
    }

    if (!isCellFocusTarget && !isInteractiveChild) {
      return;
    }

    if (isOpenSelectTarget(target)) {
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

  const setInputRef = (node: EditableControlRef) => {
    inputRef.current = node;
  };

  return {
    editing,
    setInputRef,
    cellRef,
    tdRef,
    isNavigable: editable || isNavigable,
    toggleEdit,
    handleNavigationKeyDown,
    restoreCellFocus,
  };
};
