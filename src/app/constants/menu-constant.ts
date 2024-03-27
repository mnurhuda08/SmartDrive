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
    title: 'Customer Request',
    roles: ['EM', 'PC', 'CU'],
    exact: false,
    icon: 'fas fa-users',
  },
  {
    path: '/partner',
    title: 'Partner',
    roles: ['PR', 'AD', 'EM'],
    exact: false,
    icon: 'fa fa-building',
    child: [
      {
        path: '/partner/partner',
        title: 'Partner',
        roles: ['AD'],
        exact: false,
        icon: 'fa fa-car',
      },
      {
        path: '/partner/workorder',
        title: 'Partner Work Order',
        roles: ['PR'],
        exact: false,
        icon: 'fa fa-briefcase',
      }
    ]
  },
  {
    path: '/so/page/1',
    title: 'Service Order',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-cogs',
  },
  {
    path: '/payment',
    title: 'Payment',
    roles: ['EM'],
    exact: false,
    icon: 'fas fa-money-check ',
    child: [
      {
        path: `/payment/payment-page`,
        title: 'Payment Page',
        roles: ['EM'],
        exact: false,
        icon: 'fas fa-piggy-bank',
      },
      {
        path: '/payment/payment-transaction',
        title: 'Payment Transaction',
        roles: ['EM'],
        exact: false,
        icon: 'fas fa-money-check ',
      },
      {
        path: `/payment/batch-page`,
        title: 'Payment Batch',
        roles: ['EM'],
        exact: false,
        icon: 'fas fa-funnel-dollar',
      },
      {
        path: `/payment/send-money`,
        title: 'Send Money',
        roles: ['EM'],
        exact: false,
        icon: 'fas fa-funnel-dollar',
      },
      {
        path: `/payment/topup-money`,
        title: 'Topup Money',
        roles: ['EM'],
        exact: false,
        icon: 'fas fa-funnel-dollar',
      },
    ]
  },


];

