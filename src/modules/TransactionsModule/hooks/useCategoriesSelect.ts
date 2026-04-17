import type { SelectProps } from 'antd';
import { useState } from 'react';

export const useCategoriesSelect = ({
  defaultCategories = [],
  options,
}: {
  options: SelectProps['options'];
  defaultCategories?: string[];
}) => {
  const ALL = 'CATEGORIES_ALL' as const;
  const [selectedCategories, setSelectedCategories] = useState<string[]>(defaultCategories);

  const handleCategoriesChange = (next: string[]) => {
    if (next.length === 0) {
      setSelectedCategories([ALL]);

      return;
    }

    if (next.includes(ALL)) {
      const wasAllSelected = selectedCategories.includes(ALL);

      if (!wasAllSelected || next.length === 1) {
        setSelectedCategories([ALL]);

        return;
      }
    }

    const withoutAll = next.filter((value) => value !== ALL);

    if (withoutAll.length > 0) {
      setSelectedCategories(withoutAll);

      return;
    }

    setSelectedCategories([ALL]);
  };

  return {
    selectedCategories,
    options,
    handleCategoriesChange,
  };
};
