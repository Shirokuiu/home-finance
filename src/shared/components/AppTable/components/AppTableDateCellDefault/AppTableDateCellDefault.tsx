import type { TransactionDataType } from 'src/shared/components/AppTable/types';

function AppTableDateCellDefault({ value }: Readonly<{ value: TransactionDataType['date'] }>) {
  return <span className="tp-color-theme-tertiary">{value}</span>;
}

export default AppTableDateCellDefault;
