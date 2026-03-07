import type { PropsWithCssClassName } from 'src/shared/types/shared';

export type SvgSpriteIconProps = PropsWithCssClassName<{
  id: SvgSpriteIconId;
  width?: number;
  height?: number;
}>;

export enum SvgSpriteIconId {
  PhoneCall = 'phone-call',
  ShoppingCart = 'shopping-cart',
  Telegram = 'telegram',
}

export enum SvgSpriteIconSize {
  S = 10,
  M = 20,
  L = 40,
}
