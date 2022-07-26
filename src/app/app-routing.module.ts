import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAplicationComponent } from './job-aplication/job-aplication.component';
import { CongratsComponent } from './congrats/congrats.component';

const routes: Routes = [
  {
    path: '',
    component: JobAplicationComponent,
  },
  {
    path: 'congrats',
    component: CongratsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
