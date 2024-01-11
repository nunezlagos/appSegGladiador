import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrocelularPage } from './registrocelular.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocelularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocelularPageRoutingModule {}
