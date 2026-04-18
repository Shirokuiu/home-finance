import { useState } from 'react';
import type { SelectProps } from 'antd';

export const useAppSelect = ({
  disableOpenOnArrowDown,
  onOpenChange,
  onKeyDown,
}: {
  disableOpenOnArrowDown?: boolean;
  onOpenChange?: SelectProps['onOpenChange'];
  onKeyDown?: SelectProps['onKeyDown'];
}) => {
  const [open, setOpen] = useState(false);

  const handleKeyDown: SelectProps['onKeyDown'] = (evt) => {
    if (disableOpenOnArrowDown && !open && (evt.key === 'ArrowDown' || evt.key === 'ArrowUp')) {
      evt.preventDefault();
      setOpen(false);
    }

    onKeyDown?.(evt);
  };

  const handleOpenChange: SelectProps['onOpenChange'] = (nextOpen) => {
    if (disableOpenOnArrowDown) {
      setOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  return {
    open,
    handleKeyDown,
    handleOpenChange,
  };
};
