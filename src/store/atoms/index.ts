import { atomWithStorage } from 'jotai/utils';

import { User } from '@/types/User';
import { atom } from 'jotai';

export const userAtom = atomWithStorage<User>('vendingmachine-user', {
  money: 0,
});

export const insertedMoneyAtom = atom(0);
