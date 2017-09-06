import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Inventory Dashboard',
      route: '/product',
      icon: 'directions_car',
    }, {
      title: 'Customer Dashboard',
      route: '/logs',
      icon: 'people',
    }, {
      title: 'Credit Dashboard',
      route: '/credit',
      icon: 'credit_card',
    }, {
      title: 'Manage Users',
      route: '/users',
      icon: 'verified_users',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
