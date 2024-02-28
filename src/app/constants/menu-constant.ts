import { IMenus } from '../interfaces/common/i-menus';

export const MenuConstant: IMenus[] = [
  {
    path: '/',
    title: 'Dashboard',
    roles: ['EM', 'PC', 'CU'],
    exact: true,
    icon: 'fas fa-tachometer-alt',
  },
  {
    path: '/my-profile',
    title: 'My Profile',
    roles: ['EM', 'PC', 'CU'],
    exact: false,
    icon: 'fas fa-user',
  },
  {
    path: '/master',
    title: 'Master',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-home',
    nested: [
      {
        path: '/master/car',
        title: 'Car',
        exact: false,
        icon: 'fas fa-car',
      },
    ],
  },
  {
    path: '/customer',
    title: 'Customer',
    roles: ['CU'],
    exact: false,
    icon: 'fas fa-users',
  },
  {
    path: '/partner',
    title: 'Partner',
    roles: ['PR'],
    exact: false,
    icon: 'fas fa-columns',
  },
];
