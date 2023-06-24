import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'fateh-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.scss'],
  imports: [IonicModule, TranslateModule, FormsModule, NgClass],
  standalone: true,
})
export class OtpModalComponent {
  @Input() public email = '';
  public submitting = false;
  public OTP = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
    otp6: '',
  };

  constructor() {}

  public otpController(event: any, next: any, prev: any, index: number) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    } else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else if (index == 5) {
      this.submit();
    } else {
      console.log('0');
    }
  }

  async submit() {
    this.submitting = true;
    try {
      this.submitting = false;
    } catch (e) {
      this.submitting = false;
    }
  }
}
