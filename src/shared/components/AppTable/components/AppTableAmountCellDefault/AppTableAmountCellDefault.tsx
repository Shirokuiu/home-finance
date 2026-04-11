import { AmountTypeColorMap, AmountTypeSignMap } from 'src/shared/components/AppTable/constants';
import type { TransactionDataTypeAmount } from 'src/shared/components/AppTable/types';

function AppTableAmountCellDefault({
  type,
  value,
}: Pick<TransactionDataTypeAmount, 'value' | 'type'>) {
  return (
    <span className={`tp-14-16-500 ${AmountTypeColorMap[type]}`}>
      {AmountTypeSignMap[type]}
      {value} ₽
    </span>
  );
}

export default AppTableAmountCellDefault;
