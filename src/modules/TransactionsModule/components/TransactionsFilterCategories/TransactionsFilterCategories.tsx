import { CATEGORY_OPTIONS } from 'src/modules/TransactionsModule/constants';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import { useCategoriesSelect } from 'src/modules/TransactionsModule/hooks';
import TransactionsFilterCategoriesMaxTagPlaceholder from 'src/modules/TransactionsModule/components/TransactionsFilterCategoriesMaxTagPlaceholder/TransactionsFilterCategoriesMaxTagPlaceholder';

function TransactionsFilterCategories() {
  const { selectedCategories, options, handleCategoriesChange } = useCategoriesSelect({
    defaultCategories: ['CATEGORIES_ALL'],
    options: CATEGORY_OPTIONS,
  });

  return (
    <AppSelect
      className="transactions-filters__option-select"
      mode="multiple"
      value={selectedCategories}
      size="large"
      options={options}
      defaultValue="CATEGORIES_ALL"
      maxTagCount="responsive"
      maxTagPlaceholder={(omittedValues) => (
        <TransactionsFilterCategoriesMaxTagPlaceholder omittedValues={omittedValues} />
      )}
      popupMatchSelectWidth={400}
      onChange={handleCategoriesChange}
    />
  );
}

export default TransactionsFilterCategories;
