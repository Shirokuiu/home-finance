import type { ObjectValues, PropsWithCssClassName } from 'src/shared/types/shared';

export const SvgSpriteIconId = {
  Wallet: 'wallet',
  ChartLine: 'chart-line',
  Calendar: 'calendar',
  PiggyBank: 'piggy-bank',
  CaretUp: 'caret-up',
} as const;

export type SvgSpriteIconIdValue = ObjectValues<typeof SvgSpriteIconId>;

export type SvgSpriteIconProps = PropsWithCssClassName<{
  id: SvgSpriteIconIdValue;
  width?: number;
  height?: number;
}>;

export const SvgSpriteIconSize = {
  S: 10,
  M: 20,
  L: 40,
} as const;
