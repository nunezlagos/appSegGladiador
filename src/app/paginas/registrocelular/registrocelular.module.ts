import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocelularPageRoutingModule } from './registrocelular-routing.module';

import { RegistrocelularPage } from './registrocelular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrocelularPageRoutingModule
  ],
  declarations: [RegistrocelularPage]
})
export class RegistrocelularPageModule {}
