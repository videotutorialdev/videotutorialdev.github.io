import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArchivesComponent } from './archives.component';
import { archivesRoutes } from './archives.routes';

@NgModule({
  imports: [RouterModule.forChild(archivesRoutes)],
  declarations: [ArchivesComponent],
})
export class ArchivesModule {}
