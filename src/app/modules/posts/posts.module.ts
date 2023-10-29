import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { postsRoutes } from './posts.routes';

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  declarations: [PostsComponent],
})
export class PostsModule {}
