import { type SvgSpriteIconIdValue } from 'src/shared/components/SvgSpriteIcon/types';
import SvgSpriteIcon from 'src/shared/components/SvgSpriteIcon/SvgSpriteIcon';
import { Flex } from 'antd';
import { IconIdCssModMap } from 'src/modules/SummaryModule/constants';

import './summary-card-icon.scss';

function SummaryCardIcon({ iconId }: { readonly iconId: SvgSpriteIconIdValue }) {
  return (
    <Flex
      align="center"
      justify="center"
      className={`summary-card-icon ${IconIdCssModMap[iconId] ?? ''}`.trim()}
    >
      <SvgSpriteIcon className="summary-card-icon__svg" width={11} height={11} id={iconId} />
    </Flex>
  );
}

export default SummaryCardIcon;
