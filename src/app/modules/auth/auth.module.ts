import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [IonicModule, CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
