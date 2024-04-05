import React from 'react';
import Charge from '@/pages/Charge/Charge';
import VendingMachinePage from '@/pages/VendingMachine/VendingMachine';

interface RouteType {
  title: string;
  path: string;
  element: React.ReactNode;
}

export const routes: RouteType[] = [
  {
    title: 'charge',
    path: '/charge',
    element: <Charge />,
  },
  {
    title: 'vending-machine',
    path: '/',
    element: <VendingMachinePage />,
  },
];
