import { Button, type ButtonProps, ConfigProvider } from 'antd';

function AppButtonAdd(props: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: '#e1f0ff',
            defaultHoverBg: '#3699ff',
            defaultActiveBg: '#3699ff',
            defaultBorderColor: 'transparent',
            defaultHoverBorderColor: 'transparent',
            defaultActiveBorderColor: 'transparent',
            defaultColor: '#3699ff',
            defaultHoverColor: '#fff',
            defaultActiveColor: '#fff',
          },
        },
      }}
    >
      <Button {...props}>{props.children}</Button>
    </ConfigProvider>
  );
}

export default AppButtonAdd;
