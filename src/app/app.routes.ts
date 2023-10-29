import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./modules/tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'archives',
    loadChildren: () =>
      import('./modules/archives/archives.module').then(
        (m) => m.ArchivesModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./modules/404/404.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
