import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaPinPageRoutingModule } from './crea-pin-routing.module';

import { CreaPinPage } from './crea-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaPinPageRoutingModule
  ],
  declarations: [CreaPinPage]
})
export class CreaPinPageModule {}
