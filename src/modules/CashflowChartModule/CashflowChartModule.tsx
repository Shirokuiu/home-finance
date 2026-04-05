import { IncomeExpenseLineChart } from 'src/shared/components/charts';
import type { PropsWithCssClassName } from 'src/shared/types/shared';

import './cashflow-chart-module.scss';

const mockData = [
  {
    date: 'Май',
    income: 10000,
    expenses: 5000,
  },
  {
    date: 'Июнь',
    income: 10000,
    expenses: 7000,
  },
  {
    date: 'Июнь',
    income: 10000,
    expenses: 4000,
  },
  {
    date: 'Август',
    income: 10000,
    expenses: 8000,
  },
  {
    date: 'Сентябрь',
    income: 10000,
    expenses: 20000,
  },
];

function CashflowChartModule({ className = '' }: PropsWithCssClassName) {
  return (
    <div className={`cashflow-chart-module ${className}`.trim()}>
      <h2 className="tp-reset tp-18-20-600 cashflow-chart-module__title">Доходы / Расходы</h2>
      <IncomeExpenseLineChart data={mockData} />
    </div>
  );
}

export default CashflowChartModule;
