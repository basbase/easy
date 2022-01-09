import { List, toList, Validatable } from '@thisisagile/easy';
import { Dispatch, SetStateAction, useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  return [state, () => setState(s => !s)];
};

export const useA = <E extends Validatable>(item: Partial<E> = {} as Partial<E>): [E, (e: E) => E] => {
  const [state, setState] = useState<E>({ isValid: false, ...item } as E);
  return [
    state,
    (e: E): E => {
      setState(e);
      return e;
    },
  ];
};

export const useAn = useA;

export const useEntity = useA;

export const useList = <E>(...items: E[]): [List<E>, Dispatch<SetStateAction<List<E>>>] => useState<List<E>>(toList<E>(...items));