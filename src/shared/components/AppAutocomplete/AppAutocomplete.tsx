import { AutoComplete, ConfigProvider, Input, type InputProps } from 'antd';

import './app-autocomplete.scss';

function AppAutocomplete({ placeholder = 'Найти...' }: Pick<InputProps, 'placeholder'>) {
  return (
    <AutoComplete className="app-autocomplete">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#f3f6f9',
            colorBorder: '#f3f6f9',
          },
          components: {
            Input: {
              hoverBg: 'rgb(235, 237, 243)',
              activeBg: 'rgb(235, 237, 243)',
              activeBorderColor: 'rgb(235, 237, 243)',
              hoverBorderColor: 'rgb(235, 237, 243)',
              activeShadow: '0 0 0 2px rgba(235, 237, 243,0.1)',
            },
            Button: {
              defaultBg: '#f3f6f9',
              defaultHoverBg: 'rgb(228, 230, 239)',
              defaultActiveBg: 'rgb(228, 230, 239)',
              defaultBorderColor: 'transparent',
              defaultHoverBorderColor: 'transparent',
              defaultActiveBorderColor: 'transparent',
              defaultColor: '#7e8299',
              defaultHoverColor: '#7e8299',
              defaultActiveColor: '#7e8299',
            },
          },
        }}
      >
        <Input.Search size="large" placeholder={placeholder} />
      </ConfigProvider>
    </AutoComplete>
  );
}

export default AppAutocomplete;
