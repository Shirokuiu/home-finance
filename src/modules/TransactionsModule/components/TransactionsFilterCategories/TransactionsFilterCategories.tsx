import { CATEGORY_OPTIONS } from 'src/modules/TransactionsModule/constants';
import AppSelect from 'src/shared/components/AppSelect/AppSelect';
import { useCategoriesSelect } from 'src/modules/TransactionsModule/hooks';

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
      maxTagCount={2}
      showSearch={{
        optionFilterProp: 'label',
      }}
      onChange={handleCategoriesChange}
    />
  );
}

export default TransactionsFilterCategories;
