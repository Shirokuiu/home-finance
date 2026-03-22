import SummaryCard from 'src/modules/SummaryModule/SummaryCard/SummaryCard';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/types';

import './summary-module.scss';

function SummaryModule() {
  return (
    <section className="summary-module">
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.Wallet}
        title="Общий баланс"
        summary="449466,86 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'negative',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.ChartLine}
        title="Расходы за период"
        summary="+46014,72 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.Calendar}
        title="Доходы за период"
        summary="+300014,72 ₽"
        className="summary-module__card"
      />
      <SummaryCard
        periodChangeConfig={{
          type: 'positive',
          value: '11,1%',
        }}
        iconId={SvgSpriteIconId.PiggyBank}
        title="Сбережения"
        summary="+200014,72 ₽"
        className="summary-module__card"
      />
    </section>
  );
}

export default SummaryModule;
