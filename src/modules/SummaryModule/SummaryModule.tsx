import SummaryCard from 'src/modules/SummaryModule/SummaryCard/SummaryCard';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/constants';
import type { PropsWithCssClassName } from 'src/shared/types/shared';

import './summary-module.scss';

function SummaryModule({ className }: PropsWithCssClassName) {
  return (
    <section className={`summary-module ${className ?? ''}`.trim()}>
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.Wallet}
        title="Общий баланс"
        summary="449 466,86 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'negative',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.ChartLine}
        title="Расходы за период"
        summary="+46 014,72 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.Calendar}
        title="Доходы за период"
        summary="+300 014,72 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.PiggyBank}
        title="Сбережения"
        summary="+200 014,72 ₽"
        className="summary-module__card"
      />
    </section>
  );
}

export default SummaryModule;
