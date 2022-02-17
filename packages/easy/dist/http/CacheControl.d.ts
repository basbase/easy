export declare class CacheControl {
    private age;
    private stale?;
    readonly enabled: boolean;
    private constructor();
    static disabled: () => CacheControl;
    static OneSecond: () => CacheControl;
    static fiveSeconds: () => CacheControl;
    static tenSeconds: () => CacheControl;
    static custom: (maxAge: number, staleWhileRevalidate?: number | undefined) => CacheControl;
    maxAge: (a: number) => this;
    staleWhileRevalidate: (s?: number | undefined) => this;
    value: () => string;
    name: string;
}
