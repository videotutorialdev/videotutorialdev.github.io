import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { tagsRoutes } from './home.routes';

@NgModule({
  imports: [RouterModule.forChild(tagsRoutes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
