import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menus: { name: string; routerLink: string }[] = [
    {
      name: 'Beranda',
      routerLink: '',
    },
    {
      name: 'Posts',
      routerLink: 'posts',
    },
    {
      name: 'Categories',
      routerLink: 'categories',
    },
    {
      name: 'Tags',
      routerLink: 'tags',
    },
    {
      name: 'archives',
      routerLink: 'archives',
    },
  ];
}
