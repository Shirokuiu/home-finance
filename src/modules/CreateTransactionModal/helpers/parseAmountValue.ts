export const parseAmountValue = (value: string | undefined) => {
  const parsedValue = String(value ?? '').replace(/\s/g, '');

  return parsedValue ? Number(parsedValue) : '';
};
