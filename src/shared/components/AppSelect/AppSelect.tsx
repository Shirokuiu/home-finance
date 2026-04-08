import { ConfigProvider, Select, type SelectProps } from 'antd';

import './app-select.scss';

function AppSelect({ size, className = '', options, defaultValue }: SelectProps) {
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
          },
        },
      }}
    >
      <Select
        defaultValue={defaultValue}
        size={size}
        options={options}
        className={`app-select ${className}`.trim()}
      />
    </ConfigProvider>
  );
}

export default AppSelect;
