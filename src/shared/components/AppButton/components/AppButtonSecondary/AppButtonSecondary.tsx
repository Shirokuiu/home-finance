import { Button, type ButtonProps, ConfigProvider } from 'antd';

function AppButtonSecondary(props: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: '#3699ff',
            defaultHoverBg: '#187de4',
            defaultActiveBg: '#187de4',
            defaultBorderColor: '#3699ff',
            defaultHoverBorderColor: '#187de4',
            defaultActiveBorderColor: '#187de4',
            defaultColor: '#fff',
            defaultHoverColor: '#fff',
            defaultActiveColor: '#fff',
            textTextColor: '#fff',
          },
        },
      }}
    >
      <Button {...props} />
    </ConfigProvider>
  );
}

export default AppButtonSecondary;
