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
    path: '/users',
    title: 'Users',
    roles: ['EM', 'AD'],
    exact: false,
    icon: 'fas fa-users',
  },
  {
    path: '/roles',
    title: 'Roles',
    roles: ['EM', 'AD'],
    exact: false,
    icon: 'fas fa-user-secret',
  },
  {
    path: '/master',
    title: 'Master',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-home',
  },
  {
    path: '/master/carbrand',
    title: 'Car Brand',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-car',
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
  {
    path: '/so',
    title: 'Service Order',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-cogs',
  },
];
