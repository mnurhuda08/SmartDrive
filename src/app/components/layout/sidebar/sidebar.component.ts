import { Component } from '@angular/core';
import { MenuConstant } from 'src/app/constants/menu-constant';
import { IMenus } from 'src/app/interfaces/common/i-menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menus: any[] = [];
  filteredMenus: IMenus[] = [];
  roles: string[] = [];

  constructor() {
    this.menus = MenuConstant;
    const myRoles = ['AD', 'CU', 'EM', 'PC', 'PR'];

    MenuConstant.filter((menuItem) =>
      menuItem.roles.some((role) => myRoles.includes(role))
    ).map((item) => this.filteredMenus.push(item));
  }
}
