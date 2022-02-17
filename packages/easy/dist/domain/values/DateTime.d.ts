import { Value } from '../../types';
import { Moment } from 'moment';
import 'moment/min/locales';
export declare type DateTimeUnit = 'year' | 'years' | 'y' | 'quarter' | 'quarters' | 'Q' | 'month' | 'months' | 'M' | 'week' | 'weeks' | 'w' | 'day' | 'days' | 'd' | 'hour' | 'hours' | 'h' | 'minute' | 'minutes' | 'm' | 'second' | 'seconds' | 's' | 'millisecond' | 'milliseconds' | 'ms';
export declare class DateTime extends Value<string | undefined> {
    constructor(value?: string | number | Date, format?: string);
    static get now(): DateTime;
    get isValid(): boolean;
    get fromNow(): string;
    from(date?: DateTime): string;
    from(locales?: string | string[]): string;
    from(date?: DateTime, locales?: string | string[]): string;
    protected get utc(): Moment;
    isAfter(dt: DateTime): boolean;
    isBefore(dt: DateTime): boolean;
    equals(dt: DateTime): boolean;
    add: (n: number, unit?: DateTimeUnit) => DateTime;
    subtract: (n: number, unit?: DateTimeUnit) => DateTime;
    diff: (other: DateTime, unit?: DateTimeUnit) => number;
    startOf: (unit: DateTimeUnit) => DateTime;
    endOf: (unit: DateTimeUnit) => DateTime;
    toString(): string;
    toLocale: (locales?: string | string[], format?: string) => string;
    toFull: (...locales: string[]) => string;
    toDate(): Date | undefined;
}
