import AppButtonDefault from 'src/shared/components/AppButton/components/AppButtonDefault/AppButtonDefault';
import AppButtonPrimary from 'src/shared/components/AppButton/components/AppButtonPrimary/AppButtonPrimary';
import AppButtonSecondary from 'src/shared/components/AppButton/components/AppButtonSecondary/AppButtonSecondary';
import type { AppButtonProps } from 'src/shared/components/AppButton/types';

function AppButton(props: AppButtonProps) {
  if (props.color === 'default') {
    return <AppButtonDefault {...props} color="default" />;
  }

  if (props.color === 'primary') {
    return <AppButtonPrimary {...props} color="primary" />;
  }

  if (props.color === 'secondary') {
    return <AppButtonSecondary {...props} color="default" />;
  }

  return <AppButtonDefault {...props} color="default" />;
}

export default AppButton;
