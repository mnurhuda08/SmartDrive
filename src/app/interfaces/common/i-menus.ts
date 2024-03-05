export interface IMenus {
  path?: string;
  title: string;
  roles: string[];
  exact: boolean;
  icon: string;
  nested?: INestedMenus[];
}

interface INestedMenus {
  path: string;
  title: string;
  exact: boolean;
  icon: string;
}
