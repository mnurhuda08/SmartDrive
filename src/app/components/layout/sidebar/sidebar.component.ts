import { Component } from '@angular/core';
import { MenuConstant } from 'src/app/constants/menu-constant';
import { IMenus } from 'src/app/interfaces/common/i-menus';
import { IClaims } from 'src/app/interfaces/users/i-login-claims';
import { IUser } from 'src/app/interfaces/users/i-user';
import { LoginService } from 'src/app/services/users/login.service';
import { UserService } from 'src/app/services/users/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  baseUrlResources = environment.resources;
  dateNow = Date.now();
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  menus: IMenus[] = MenuConstant;
  filteredMenus: IMenus[] = [];
  myRoles: string[] = [];

  currentUser!: IClaims;
  user!: IUser;

  filterMenu(): void {
    MenuConstant.filter((menuItem) =>
      menuItem.roles.some((role) => this.currentUser?.roles.includes(role))
    ).map((item) => this.filteredMenus.push(item));
  }

  fetchMe() {
    this.loginService.getMe(`${environment.baseUrl}/Auth/Me`).subscribe({
      next: (data) => {
        this.currentUser = data;
        this.myRoles = this.currentUser.roles;
        this.filterMenu();
        this.getUser(data.sub);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getUser(userId: string) {
    this.userService
      .getUserById(`${environment.baseUrl}/User/${userId}`)
      .subscribe({
        next: (data) => {
          this.user = data;
          console.log('user: ', this.user);
        },
        error: (error) => {
          console.log('error get user: ', error);
        },
      });
  }

  ngOnInit(): void {
    this.fetchMe();
  }
}
