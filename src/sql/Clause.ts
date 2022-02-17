import { isA, isBoolean, isNumber, Text } from '../types';
import { convert, Convert } from '../utils';

export const quote = (a: unknown): string => (isNumber(a) || isBoolean(a) || isClause(a) ? a.toString() : `'${a as string}'`);

export class Clause implements Text {
  constructor(readonly first: unknown, readonly operator: string, readonly second: unknown) {}

  and = (other: Clause): Clause => toClause(this, 'AND', other);
  or = (other: Clause): Clause => toClause(this, 'OR', other);

  toString(): string {
    return `${this.first} ${this.operator} ${quote(this.second)}`;
  }
}

export const toClause = (first: unknown, operator: string, second: unknown, conv: Convert = convert.default): Clause =>
  new Clause(first, operator, conv.from(second));

export const isClause = (c?: unknown): c is Clause => isA<Clause>(c, 'and', 'or');
