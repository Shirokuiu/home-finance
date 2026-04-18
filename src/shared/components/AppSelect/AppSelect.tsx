import { ConfigProvider, Select, type SelectProps } from 'antd';
import { useAppSelect } from 'src/shared/components/AppSelect/hooks';

import './app-select.scss';

function AppSelect(props: SelectProps & { readonly disableOpenOnArrowDown?: boolean }) {
  const {
    disableOpenOnArrowDown = false,
    className,
    onOpenChange,
    onKeyDown,
    ...selectProps
  } = props;

  const { open, handleOpenChange, handleKeyDown } = useAppSelect({
    disableOpenOnArrowDown,
    onOpenChange,
    onKeyDown,
  });

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
      <Select
        {...selectProps}
        open={disableOpenOnArrowDown ? open : undefined}
        className={`app-select ${className}`.trim()}
        onKeyDown={handleKeyDown}
        onOpenChange={handleOpenChange}
      />
    </ConfigProvider>
  );
}

export default AppSelect;
