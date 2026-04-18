import { useContext, useMemo, type KeyboardEventHandler } from 'react';
import { Input, Form } from 'antd';
import { EditableContext } from 'src/shared/components/AppTable/context';
import { useEditableCellNavigation } from 'src/shared/components/AppTable/hooks';
import type { AppEditableCellProps } from 'src/shared/components/AppTable/types';

import './app-table-editable-cell.scss';

function AppTableEditableCell<T>({
  editable,
  isActive = true,
  hasEditableClassName = true,
  editControl = 'input',
  children,
  columnIndex,
  dataIndex,
  record,
  rowIndex,
  handleSave,
  getEditValue,
  applyEditValue,
  ...restProps
}: AppEditableCellProps<T>) {
  const form = useContext(EditableContext)!;
  const {
    editing,
    setInputRef,
    cellRef,
    tdRef,
    isNavigable,
    toggleEdit,
    handleNavigationKeyDown,
    restoreCellFocus,
  } = useEditableCellNavigation({
    children,
    editable,
    dataIndex,
    record,
    rowIndex,
    columnIndex,
    form,
    getEditValue,
  });

  const save = async () => {
    try {
      const values = await form.validateFields();
      const rawValue = values[dataIndex];
      const nextRecord = applyEditValue
        ? applyEditValue(record, String(rawValue ?? ''))
        : ({ ...record, [dataIndex]: rawValue } as T);

      toggleEdit();
      handleSave?.(nextRecord);
      restoreCellFocus();
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  const handleTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      save();
    }
  };

  let childNode = children;
  const valueWrapClassName = useMemo(() => {
    if (!isActive) {
      return hasEditableClassName
        ? 'app-table-editable-cell__value-wrap app-table-editable-cell__value-wrap--no-active'
        : 'app-table-editable-cell__value-wrap--no-active';
    }

    return hasEditableClassName ? 'app-table-editable-cell__value-wrap' : '';
  }, [hasEditableClassName, isActive]);

  if (editable) {
    childNode = editing ? (
      <Form.Item style={{ margin: 0 }} name={dataIndex}>
        {editControl === 'textarea' ? (
          <Input.TextArea
            ref={(node) => {
              setInputRef(node);
            }}
            autoSize={{ minRows: 1 }}
            className="app-table-editable-cell__input app-table-editable-cell__input--textarea"
            onKeyDown={handleTextAreaKeyDown}
            onBlur={() => {
              void save();
            }}
          />
        ) : (
          <Input
            ref={setInputRef}
            className="app-table-editable-cell__input"
            onPressEnter={() => {
              void save();
            }}
            onBlur={() => {
              void save();
            }}
          />
        )}
      </Form.Item>
    ) : (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
      <div
        ref={cellRef}
        className={valueWrapClassName || undefined}
        style={{ paddingInlineEnd: 24 }}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        data-app-table-focus-target="true"
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  } else if (!isActive) {
    childNode = <div className={valueWrapClassName || undefined}>{children}</div>;
  }

  return (
    <td
      {...restProps}
      ref={tdRef}
      data-app-table-cell={isNavigable ? 'true' : undefined}
      data-row-index={isNavigable ? rowIndex : undefined}
      data-column-index={isNavigable ? columnIndex : undefined}
      onKeyDown={isNavigable ? handleNavigationKeyDown : undefined}
    >
      {childNode}
    </td>
  );
}

export default AppTableEditableCell;
