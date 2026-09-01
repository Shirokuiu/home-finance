import { Flex, type ModalProps } from 'antd';
import { AppButton } from 'src/shared/components/AppButton';

function CreateTransactionModalFooter({
  onCancel,
  onOk,
  onOkAndAddNew,
}: Readonly<{
  onOk?: ModalProps['onOk'];
  onOkAndAddNew?: () => void;
  onCancel?: ModalProps['onCancel'];
}>) {
  return (
    <Flex justify="flex-end" gap="7px">
      <AppButton size="medium" onClick={onCancel}>
        Отменить
      </AppButton>
      <AppButton color="primary" size="medium" onClick={onOk}>
        Сохранить
      </AppButton>
      <AppButton color="secondary" size="medium" onClick={onOkAndAddNew}>
        Сохранить и добавить еще
      </AppButton>
    </Flex>
  );
}

export default CreateTransactionModalFooter;
