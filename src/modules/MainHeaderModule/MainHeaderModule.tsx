import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import { NavLink } from 'react-router-dom';
import { PageRoutes } from 'src/shared/constants/routes';
import { getNavItemClassName } from 'src/modules/MainHeaderModule/helpers';

import './main-header.scss';

function MainHeaderModule() {
  return (
    <div className="main-header">
      <CenterLayout>
        <ul className="reset-list main-header__nav">
          <li className="tp-14-16-500">
            <NavLink className={getNavItemClassName} to={PageRoutes.Index} end>
              Главная
            </NavLink>
          </li>
          <li className="tp-14-16-500">
            <NavLink className={getNavItemClassName} to={PageRoutes.Transactions}>
              Транзакции
            </NavLink>
          </li>
        </ul>
      </CenterLayout>
    </div>
  );
}

export default MainHeaderModule;
