export declare const isDate: (o?: unknown) => o is Date;
export declare const days: {
    add: (date: Date, days: number) => Date;
    today: () => Date;
    yesterday: () => Date;
    tomorrow: () => Date;
};
export declare const inPast: (o?: unknown) => boolean;
export declare const inFuture: (o?: unknown) => boolean;
