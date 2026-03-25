import { Flex } from 'antd';
import CategoryIcon from 'src/shared/components/CategoryIcon/CategoryIcon';

import './top-categories-card.scss';

function TopCategoriesCard() {
  return (
    <Flex align="center" className="top-categories-card">
      <CategoryIcon />
      <div className="top-categories-card__description-wrap">
        <p className="tp-reset tp-color-gray-800 top-categories-card__description">Еда</p>
        <span className="tp-color-gray-300 top-categories-card__description-note">
          Короткое описание
        </span>
      </div>
      <div className="top-categories-card__budget-status">
        <p className="tp-reset tp-16-18-400 top-categories-card__remaining-amount">3 708,00 ₽</p>
        <div className="top-categories-card__remaining-progress-wrap">
          {/*NOTE 100% - 70% (high)*/}
          {/*     69% - 30% (medium)*/}
          {/*     29% - 0% (low)*/}
          <div
            className="top-categories-card__remaining-progress top-categories-card__remaining-progress--low"
            style={{ width: '29%' }}
          />
        </div>
      </div>
    </Flex>
  );
}

export default TopCategoriesCard;
