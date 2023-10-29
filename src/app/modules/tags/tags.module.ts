import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './tags.component';
import { homeRoutes } from './tags.routes';

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  declarations: [HomeComponent],
})
export class TagsModule {}
