import { IMenus } from '../interfaces/common/i-menus';

export const MenuConstant: IMenus[] = [
  {
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
      {
        path: '/master/category',
        title: 'Category',
        exact: false,
        icon: 'fas fa-folder',
      },
      {
        path: '/master/insurance-type',
        title: 'Insurance Type',
        exact: false,
        icon: 'fas fa-file',
      },
      {
        path: '/master/zone',
        title: 'Zone',
        exact: false,
        icon: 'fas fa-globe',
      },
      {
        path: '/master/region',
        title: 'Region',
        exact: false,
        icon: 'fas fa-map-marker',
      },
    ],
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
