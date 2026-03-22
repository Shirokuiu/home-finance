import type { SvgSpriteIconProps } from 'src/shared/components/SvgSpriteIcon/types';
import { SvgSpriteIconSize } from 'src/shared/components/SvgSpriteIcon/constants';

import './svg-sprite-icon.scss';

function SvgSpriteIcon({
  id,
  width = SvgSpriteIconSize.M,
  height = SvgSpriteIconSize.M,
  className = '',
}: SvgSpriteIconProps) {
  return (
    <svg width={width} height={height} className={`svg-sprite-icon ${className}`.trim()}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default SvgSpriteIcon;
