import React from 'react';
import Charge from '@/pages/Charge/Charge';
import VendingMachine from '@/pages/VendingMachine/VendingMachine';
import { InsertedMoneyProvider } from '@/context/InsertedMoneyContext';

interface RouteType {
  title: string;
  path: string;
  element: React.ReactNode;
}

export const routes: RouteType[] = [
  {
    title: '충전',
    path: 'charge',
    element: <Charge />,
  },
  {
    title: '자판기',
    path: '',
    element: (
      <InsertedMoneyProvider>
        <VendingMachine />
      </InsertedMoneyProvider>
    ),
  },
];
