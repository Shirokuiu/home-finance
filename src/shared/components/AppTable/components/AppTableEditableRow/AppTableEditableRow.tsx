import { Form } from 'antd';
import { EditableContext } from 'src/shared/components/AppTable/context';

function AppTableEditableRow(props: Record<string, unknown>) {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
}

export default AppTableEditableRow;
