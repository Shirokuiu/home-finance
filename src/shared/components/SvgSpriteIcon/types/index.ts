import type { ObjectValues, PropsWithCssClassName } from 'src/shared/types/shared';
import type { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/constants';

export type SvgSpriteIconIdValue = ObjectValues<typeof SvgSpriteIconId>;

export type SvgSpriteIconProps = PropsWithCssClassName<{
  id: SvgSpriteIconIdValue;
  width?: number;
  height?: number;
}>;
