import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  onLogout() {
    if (confirm('Are you sure want to logout?')) {
      localStorage.setItem('accessToken', '');
      this.router.navigateByUrl('/login');
    }
  }
}
