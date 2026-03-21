export const getNavItemClassName = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? 'main-header__nav-item-link main-header__nav-item-link--active'
    : 'main-header__nav-item-link';
