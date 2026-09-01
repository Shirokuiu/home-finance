export type PropsWithCssClassName<P = Record<string, string>> = P & { className?: string };

export type ObjectValues<T> = T[keyof T];
