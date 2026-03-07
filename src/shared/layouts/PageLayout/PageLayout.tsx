import { Spin } from 'antd';
import { useMemo } from 'react';

import { getPlatform } from 'src/shared/helpers';
import type { PageLayoutProps } from 'src/shared/layouts/PageLayout/types';
import './page-layout.scss';

function PageLayout({
  children,
  isLoading,
  className = '',
  clearPageContentPadding,
  headerSlot = null,
  footerSlot = null,
  footerFixedSlot = null,
  fullHeight = false,
}: PageLayoutProps) {
  const platform = useMemo(() => getPlatform(), []);

  return (
    <div
      className={`page-layout ${fullHeight ? 'page-layout--full-height' : ''} ${className ?? ''}`.trim()}
    >
      {isLoading && <Spin className="page-layout__spinner" />}
      <div className="page-layout__header">{headerSlot}</div>
      <div
        className={`page-layout__content ${clearPageContentPadding ? 'page-layout__content--clear-padding' : ''} ${isLoading ? 'page-layout__content--is-loading' : ''}`.trim()}
      >
        {children}
      </div>
      <div
        className={`page-layout__footer-wrap ${!footerSlot ? 'page-layout__footer-wrap--clear-padding' : ''} ${isLoading ? 'page-layout__footer-wrap--is-loading' : ''}`.trim()}
      >
        {footerSlot}
      </div>
      <div className="page-layout__footer-fixed-placeholder" aria-hidden>
        {footerFixedSlot}
      </div>
      <div
        className={`page-layout__footer-fixed ${platform === 'ios' ? 'page-layout__footer-fixed--ios' : ''}`.trim()}
      >
        {footerFixedSlot}
      </div>
    </div>
  );
}

export default PageLayout;
