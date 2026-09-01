import { AppModal } from 'src/shared/components/AppModal';
import { DatePicker, Flex, Form, Input, InputNumber, type ModalProps } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { AppSelect } from 'src/shared/components/AppSelect';
import {
  CATEGORY_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
} from 'src/modules/CreateTransactionModal/constants';
import { TransactionAmountType } from 'src/shared/types/transactions';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { formatAmountValue, parseAmountValue } from 'src/modules/CreateTransactionModal/helpers';
import CreateTransactionModalFooter from 'src/modules/CreateTransactionModal/components/CreateTransactionModalFooter/CreateTransactionModalFooter';

import './create-transaction-modal.scss';

function CreateTransactionModalModule({
  open,
  onOk,
  onCancel,
}: Readonly<{
  open?: ModalProps['open'];
  onOk?: ModalProps['onOk'];
  onCancel?: ModalProps['onCancel'];
}>) {
  return (
    <AppModal
      open={open}
      onCancel={onCancel}
      footer={
        <CreateTransactionModalFooter
          onCancel={onCancel}
          onOk={onOk}
          onOkAndAddNew={() => {
            onOk?.();
          }}
        />
      }
      title="Новая транзакция"
    >
      <Form layout="vertical">
        <Form.Item label="Категория" required>
          <AppSelect
            placeholder="Начните вводить название категории"
            showSearch={{
              optionFilterProp: 'label',
            }}
            options={CATEGORY_OPTIONS}
          />
        </Form.Item>
        <Flex gap="10px">
          <Form.Item label="Тип" className="create-transaction-modal__form-item">
            <AppSelect
              defaultValue={TransactionAmountType.Expense}
              options={TRANSACTION_TYPE_OPTIONS}
            />
          </Form.Item>
          <Form.Item label="Сумма" required className="create-transaction-modal__form-item">
            <InputNumber formatter={formatAmountValue} parser={parseAmountValue} />
          </Form.Item>
          <Form.Item label="Дата" required className="create-transaction-modal__form-item">
            <DatePicker
              defaultValue={dayjs()}
              format="DD.MM.YYYY"
              allowClear={false}
              locale={ruRU.DatePicker}
              disabledDate={(current) => current.isAfter(dayjs(), 'day')}
            />
          </Form.Item>
        </Flex>
        <Form.Item label="Описание">
          <Input.TextArea autoSize={{ minRows: 2 }} />
        </Form.Item>
      </Form>
    </AppModal>
  );
}

export default CreateTransactionModalModule;
