import { FoodIcon } from 'src/assets/img';
import { Flex } from 'antd';
import type { PropsWithCssClassName } from 'src/shared/types/shared';

import './category-icon.scss';

function CategoryIcon({ className = '' }: PropsWithCssClassName) {
  return (
    <Flex align="center" justify="center" className={`category-icon ${className}`.trim()}>
      <FoodIcon width={20} height={20} />
    </Flex>
  );
}

export default CategoryIcon;
