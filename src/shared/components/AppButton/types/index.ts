import type { ButtonProps } from 'antd';

export type AppButtonProps = Omit<ButtonProps, 'color'> &
  Readonly<{ color?: ButtonProps['color'] | AppButtonColor }>;

export type AppButtonColor = 'secondary';
