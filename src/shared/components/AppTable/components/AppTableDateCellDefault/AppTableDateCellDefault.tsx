import type { TransactionDataType } from 'src/shared/components/AppTable/types';

function AppTableDateCellDefault({ value }: Readonly<{ value: TransactionDataType['date'] }>) {
  return <span className="tp-color-gray-300">{value}</span>;
}

export default AppTableDateCellDefault;
