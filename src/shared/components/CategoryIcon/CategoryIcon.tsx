import { FoodIcon } from 'src/assets/img';
import { Flex } from 'antd';

import './category-icon.scss';

function CategoryIcon() {
  return (
    <Flex align="center" justify="center" className="category-icon">
      <FoodIcon width={20} height={20} />
    </Flex>
  );
}

export default CategoryIcon;
