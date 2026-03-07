import type { PropsWithChildren, ReactElement } from 'react';
import type { PropsWithCssClassName } from 'src/shared/types/shared';

export type PageLayoutProps = PropsWithChildren<
  PropsWithCssClassName<{
    // NOTE[@Pavlentii2]: Показ спиннера при загрузке страницы
    isLoading?: boolean;
    // NOTE[@Pavlentii2]: Слот для шапки сайта. В ней контент будет всегда прилипать к верху страницы.
    headerSlot?: ReactElement | null;
    // NOTE[@Pavlentii2]: Слот для подвала страницы. В ней контент будет всегда внизу до тех пор,
    // пока контент из page-layout__content не дойдет до него,
    // далее контент из footerSlot будет проскролен.
    footerSlot?: ReactElement | null;
    // NOTE[@Pavlentii2]: Слот для подвала страницы, который будет всегда прилипать в низу и не будет скролиться
    // несмотря на то, что основной контент имеет скролл.
    footerFixedSlot?: ReactElement | null;
    clearPageContentPadding?: boolean;
    // NOTE[@Pavlentii2]: Устанавливает фиксированную высоту макета на всю видимую область экрана (100vh).
    // Полезно для страниц, где необходимо ограничить высоту контента (например, при внутренней прокрутке списков),
    // чтобы избежать вытягивания всей страницы и обеспечить прокрутку только внутри области контента.
    fullHeight?: boolean;
  }>
>;
