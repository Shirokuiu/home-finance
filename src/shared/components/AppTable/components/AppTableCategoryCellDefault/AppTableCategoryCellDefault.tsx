import CategoryIcon from 'src/shared/components/CategoryIcon/CategoryIcon';
import { Flex } from 'antd';
import type { PropsWithChildren } from 'react';

import './app-table-category-cell-default.scss';

function AppTableCategoryCellDefault({ children }: PropsWithChildren) {
  return (
    <Flex align="center" className="app-table-category-cell-default">
      <CategoryIcon className="app-table-category-cell-default__icon" />
      {children}
    </Flex>
  );
}

export default AppTableCategoryCellDefault;
