import { Modal, type ModalProps } from 'antd';

function AppModal(props: ModalProps) {
  return <Modal {...props}>{props.children}</Modal>;
}

export default AppModal;
