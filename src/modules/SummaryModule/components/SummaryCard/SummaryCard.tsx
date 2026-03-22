import { Flex } from 'antd';
import SummaryCardIcon from 'src/modules/SummaryModule/components/SummaryCardicon/SummaryCardIcon';
import SvgSpriteIcon from 'src/shared/components/SvgSpriteIcon/SvgSpriteIcon';
import type { PropsWithCssClassName } from 'src/shared/types/shared';
import type { SummaryCardProps } from 'src/modules/SummaryModule/types';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/constants';

import 'src/modules/SummaryModule/components/SummaryCard/summary-card.scss';

function SummaryCard({
  iconId,
  title,
  summary,
  periodChangeConfig,
  className,
}: PropsWithCssClassName<SummaryCardProps>) {
  return (
    <div className={`summary-card ${className ?? ''}`.trim()}>
      <Flex align="center" gap={7} className="summary-card__title-wrap">
        <SummaryCardIcon iconId={iconId} />
        <p className="tp-reset tp-13-15-400 tp-color-theme-tertiary summary-card__title">{title}</p>
      </Flex>
      <Flex gap="4px">
        <p className="tp-reset tp-25-26-500 tp-color-theme-tertiary summary-card__result">
          {summary}
        </p>
        <Flex
          align="center"
          className={`summary-card__change summary-card__change--${periodChangeConfig.type}`}
        >
          <SvgSpriteIcon
            className={`summary-card__change-svg summary-card__change-svg--${periodChangeConfig.type}`}
            width={15}
            height={17}
            id={SvgSpriteIconId.CaretUp}
          />
          <span className="tp-14-16-500 summary-card__change-value">
            {periodChangeConfig.value}
          </span>
        </Flex>
      </Flex>
    </div>
  );
}

export default SummaryCard;
