import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './404.component';
import { notFoundRoutes } from './404.routes';

@NgModule({
  imports: [RouterModule.forChild(notFoundRoutes)],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
