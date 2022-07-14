import { Component } from '@angular/core';
import { Theme, NavItem } from '../../interfaces/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Features',
      url: '/features',
    },
    {
      label: 'Pricing',
      url: '/pricing',
    },
  ];

  theme: Theme = 'light';

  constructor() {}
}
