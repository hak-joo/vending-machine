import { atomWithStorage } from 'jotai/utils';

import { User } from '@/types/User';

export const userAtom = atomWithStorage<User>('vendingmachine-user', {
  money: 0,
});
