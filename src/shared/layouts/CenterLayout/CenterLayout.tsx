import type { PropsWithChildren } from 'react';

import './center-layout.scss';

function CenterLayout({ children }: PropsWithChildren) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
