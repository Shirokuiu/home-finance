import { useContext, useMemo } from 'react';
import { Input, Form } from 'antd';
import { EditableContext } from 'src/shared/components/AppTable/context';
import { useEditableCellNavigation } from 'src/shared/components/AppTable/hooks';
import type { AppEditableCellProps } from 'src/shared/components/AppTable/types';

import './app-table-editable-cell.scss';

function AppTableEditableCell<T>({
  editable,
  isActive = true,
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
    inputRef,
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

  let childNode = children;
  const valueWrapClassName = useMemo(
    () =>
      `app-table-editable-cell__value-wrap${
        isActive ? '' : ' app-table-editable-cell__value-wrap--no-active'
      }`,
    [isActive],
  );

  if (editable) {
    childNode = editing ? (
      <Form.Item style={{ margin: 0 }} name={dataIndex}>
        <Input
          ref={inputRef}
          className="app-table-editable-cell__input"
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
      <div
        ref={cellRef}
        className={valueWrapClassName}
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
    childNode = <div className={valueWrapClassName}>{children}</div>;
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
