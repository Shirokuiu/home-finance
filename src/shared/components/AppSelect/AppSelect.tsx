import { ConfigProvider, Select, type SelectProps } from 'antd';

import './app-select.scss';

function AppSelect(props: SelectProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionSelectedBg: '#e4e6ef',
            optionActiveBg: '#f3f6f9',
            optionSelectedColor: '#7e8299',
            hoverBorderColor: '#b1b8d1',
            activeBorderColor: '#7e8299',
            colorText: '#7e8299',
            colorPrimary: '#7e8299',
          },
        },
      }}
    >
      <Select {...props} className={`app-select ${props.className}`.trim()} />
    </ConfigProvider>
  );
}

export default AppSelect;
