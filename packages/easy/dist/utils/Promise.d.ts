import { ErrorOrigin } from '../types';
declare type Pro<A> = A | PromiseLike<A>;
declare type Aw<A> = Awaited<A>;
export declare const resolve: <S = unknown>(subject: S | PromiseLike<S>) => Promise<S>;
export declare const reject: <S = never>(e: ErrorOrigin) => Promise<S>;
export declare const tuple: {
    2: <F, S>(first: Pro<F>, second: Pro<S>) => Promise<[Awaited<F>, Awaited<S>]>;
    3: <F_1, S_1, T>(first: Pro<F_1>, second: Pro<S_1>, third: Pro<T>) => Promise<[Awaited<F_1>, Awaited<S_1>, Awaited<T>]>;
    4: <F_2, S_2, T_1, Fo>(first: Pro<F_2>, second: Pro<S_2>, third: Pro<T_1>, forth: Pro<Fo>) => Promise<[Awaited<F_2>, Awaited<S_2>, Awaited<T_1>, Awaited<Fo>]>;
    5: <F_3, S_3, T_2, Fo_1, Fi>(first: Pro<F_3>, second: Pro<S_3>, third: Pro<T_2>, forth: Pro<Fo_1>, fifth: Pro<Fi>) => Promise<[Awaited<F_3>, Awaited<S_3>, Awaited<T_2>, Awaited<Fo_1>, Awaited<Fi>]>;
    all: <F_4, S_4>(first: Pro<F_4>, second: Pro<S_4>[]) => Promise<[Awaited<F_4>, S_4[]]>;
    spread: <F_5, S_5>(first: Pro<F_5>, ...second: Pro<S_5>[]) => Promise<[Awaited<F_5>, S_5[]]>;
};
export {};
