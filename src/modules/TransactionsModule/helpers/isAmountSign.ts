export const isAmountSign = (sign: string | undefined): sign is '+' | '-' =>
  sign === '+' || sign === '-';
