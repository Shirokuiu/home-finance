export const formatAmountValue = (value: string | number | undefined | null) =>
  String(value ?? '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
