import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.css'],
  imports: [IonicModule, FormsModule, TranslateModule, NgIf],
  providers: [TranslateService],
  standalone: true,
})
export class AddCardModalComponent {
  public card: {
    number: string;
    name: string;
  } = {
    number: '',
    name: '',
  };
  constructor(private modalController: ModalController) {}

  close() {
    return this.modalController.dismiss(null, 'cancel');
  }

  async confirm() {}
}
