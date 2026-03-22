import type { SvgSpriteIconIdValue } from 'src/shared/components/SvgSpriteIcon/types';

export type SummaryCardProps = Readonly<{
  iconId: SvgSpriteIconIdValue;
  title: string;
  summary: string;
  periodChangeConfig: SummaryCardPeriodChangeConfig;
}>;

export type SummaryCardPeriodChangeConfig = {
  value: string;
  type: SummaryCardPeriodChangeConfigType;
};

export type SummaryCardPeriodChangeConfigType = 'positive' | 'negative';
