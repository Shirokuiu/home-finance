import {
  SvgSpriteIconId,
  type SvgSpriteIconIdValue,
} from 'src/shared/components/SvgSpriteIcon/types';

export const IconIdCssModMap: Partial<Record<SvgSpriteIconIdValue, string>> = {
  [SvgSpriteIconId.Wallet]: 'summary-card-icon--wallet',
  [SvgSpriteIconId.ChartLine]: 'summary-card-icon--chart-line',
  [SvgSpriteIconId.Calendar]: 'summary-card-icon--calendar',
  [SvgSpriteIconId.PiggyBank]: 'summary-card-icon--piggy-bank',
} as const;
