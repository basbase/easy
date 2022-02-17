import { Constructor } from './Constructor';
export declare const build: {
    singleton: <T>(ctr: Constructor<T>, ...args: any[]) => T;
    reset: () => void;
};
export declare const singleton: <T>(ctr: Constructor<T>, ...args: any[]) => T;
