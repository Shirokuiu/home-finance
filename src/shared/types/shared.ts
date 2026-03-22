export type PropsWithCssClassName<P = Record<string, string>> = P & { className?: string };

export type ObjectValues<T extends Record<string, unknown>> = T[keyof T];
