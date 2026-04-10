import CategoryIcon from 'src/shared/components/CategoryIcon/CategoryIcon';
import { Flex } from 'antd';
import type { PropsWithChildren } from 'react';

function AppTableCategoryCellDefault({ children }: PropsWithChildren) {
  return (
    <Flex align="center">
      <CategoryIcon />
      {children}
    </Flex>
  );
}

export default AppTableCategoryCellDefault;
