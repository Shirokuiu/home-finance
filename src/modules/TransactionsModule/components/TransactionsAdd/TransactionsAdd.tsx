import { PlusOutlined } from '@ant-design/icons';
import { CreateTransactionModalModule } from 'src/modules/CreateTransactionModal';
import { useAppModal } from 'src/shared/components/AppModal';
import { AppButton } from 'src/shared/components/AppButton';

function TransactionsAdd() {
  const { isModalOpen, showModal, onOk, onCancel } = useAppModal();

  return (
    <>
      <AppButton
        color="primary"
        icon={<PlusOutlined />}
        size="large"
        onClick={() => {
          showModal();
        }}
      >
        Добавить
      </AppButton>
      <CreateTransactionModalModule open={isModalOpen} onOk={onOk} onCancel={onCancel} />
    </>
  );
}

export default TransactionsAdd;
