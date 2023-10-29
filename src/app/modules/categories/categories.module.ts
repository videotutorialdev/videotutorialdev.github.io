import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { categoriesRoutes } from './categories.routes';

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  declarations: [CategoriesComponent],
})
export class CategoriesModule {}
