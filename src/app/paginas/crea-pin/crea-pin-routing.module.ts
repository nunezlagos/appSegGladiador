import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaPinPage } from './crea-pin.page';

const routes: Routes = [
  {
    path: '',
    component: CreaPinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaPinPageRoutingModule {}
