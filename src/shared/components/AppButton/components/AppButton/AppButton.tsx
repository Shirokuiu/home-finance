import { Button, type ButtonProps, ConfigProvider } from 'antd';

function AppButton({ icon, type, size, style, danger, onClick, children }: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: '#f3f6f9',
            defaultHoverBg: '#e4e6ef',
            defaultActiveBg: '#e4e6ef',
            defaultBorderColor: '#f3f6f9',
            defaultHoverBorderColor: '#e4e6ef',
            defaultActiveBorderColor: '#e4e6ef',
            defaultColor: '#7e8299',
            defaultHoverColor: '#7e8299',
            defaultActiveColor: '#7e8299',
          },
        },
      }}
    >
      <Button style={style} icon={icon} size={size} danger={danger} type={type} onClick={onClick}>
        {children}
      </Button>
    </ConfigProvider>
  );
}

export default AppButton;
