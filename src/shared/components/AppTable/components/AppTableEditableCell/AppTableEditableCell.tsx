import { useContext, useEffect, useRef, useState } from 'react';
import { Input, type InputRef, Form } from 'antd';
import { EditableContext } from 'src/shared/components/AppTable/context';
import type { AppEditableCellProps } from 'src/shared/components/AppTable/types';

import './app-table-editable-cell.scss';

function AppTableEditableCell<T>({
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  getEditValue,
  applyEditValue,
  ...restProps
}: AppEditableCellProps<T>) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);

    const editValue = getEditValue?.(record) ?? String(record[dataIndex as keyof T] ?? '');

    form.setFieldsValue({ [dataIndex]: editValue });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      const rawValue = values[dataIndex];
      const nextRecord = applyEditValue
        ? applyEditValue(record, String(rawValue ?? ''))
        : ({ ...record, [dataIndex]: rawValue } as T);

      toggleEdit();
      handleSave?.(nextRecord);
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

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
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="app-table-editable-cell__value-wrap"
        style={{ paddingInlineEnd: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
}

export default AppTableEditableCell;
