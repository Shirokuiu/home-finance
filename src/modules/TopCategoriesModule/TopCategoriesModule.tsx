import { NavLink } from 'react-router-dom';
import TopCategoriesCard from 'src/modules/TopCategoriesModule/components/TopCategoriesCard/TopCategoriesCard';
import { Flex } from 'antd';

import './top-categories-module.scss';

function TopCategoriesModule() {
  return (
    <section className="top-categories-module">
      <Flex align="center" justify="space-between" className="top-categories-module__title-wrap">
        <h2 className="tp-reset tp-18-20-600">Распределение расходов</h2>
        <NavLink to="#" className="top-categories-module__edit-link">
          Редактировать категории
        </NavLink>
      </Flex>
      <Flex vertical gap="16px">
        <TopCategoriesCard />
        <TopCategoriesCard />
        <TopCategoriesCard />
        <TopCategoriesCard />
      </Flex>
    </section>
  );
}

export default TopCategoriesModule;
