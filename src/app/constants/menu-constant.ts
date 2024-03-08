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
    roles: ['AD'],
    exact: false,
    icon: 'fas fa-users',
  },
  {
    path: '/roles',
    title: 'Roles',
    roles: ['AD'],
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
    path: '/master',
    title: 'Partner',
    roles: ['EM'],
    exact: false,
    icon: 'fa fa-building',
    nested: [
      {
        path: '/master/car',
        title: 'Partner',
        roles: ['PR', 'AD'],
        exact: false,
        icon: 'fa fa-car',
      },
      {
        path: '/partner/workorder',
        title: 'Partner Work Order',
        roles: ['PR'],
        exact: false,
        icon: 'fa fa-briefcase',
      },
    ],
  },
  {
    path: '/so',
    title: 'Service Order',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-cogs',
  },
];
