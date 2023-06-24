import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RtlService } from '../../../shared/services/rtl.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { NgIf } from '@angular/common';
import { getWindow } from '../../../app.component';

@Component({
  selector: 'fateh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule, TranslateModule, NgIf],
  providers: [TranslateService],
  standalone: true,
})
export class LoginComponent {
  public email = '';

  constructor(public rtlService: RtlService) {}

  public async login() {}

  public async register() {}
}
