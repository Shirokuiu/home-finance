import type { DisplayValueType } from '@rc-component/select/lib/interface';
import { useMemo } from 'react';

function TransactionsFilterCategoriesMaxTagPlaceholder({
  omittedValues,
}: Readonly<{
  omittedValues: DisplayValueType[];
}>) {
  const omittedLabels = useMemo(
    () => omittedValues.map((option) => String(option.label ?? option.value ?? '')).join(', '),
    [omittedValues],
  );

  return (
    <span className="transactions-filters__option-omitted">
      <span className="transactions-filters__option-omitted-text">{omittedLabels}</span>
      {omittedValues.length > 1 ? (
        <span className="transactions-filters__option-omitted-count">+{omittedValues.length}</span>
      ) : null}
    </span>
  );
}

export default TransactionsFilterCategoriesMaxTagPlaceholder;
