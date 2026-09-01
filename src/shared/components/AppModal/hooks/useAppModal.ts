import { useState } from 'react';
import type { UseAppModalReturn } from 'src/shared/components/AppModal/types';

export const useAppModal = (): UseAppModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onOk = () => {
    setIsModalOpen(false);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    showModal,
    onOk,
    onCancel,
  };
};
