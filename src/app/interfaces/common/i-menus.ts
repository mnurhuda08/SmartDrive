export interface IMenus {
  path: string;
  title: string;
  roles: string[];
  exact: boolean;
  icon: string;
  child?: IMenus[];
}
