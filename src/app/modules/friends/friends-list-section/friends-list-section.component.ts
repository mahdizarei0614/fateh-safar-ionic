import { Component } from '@angular/core';
import { RtlService } from '../../../shared/services/rtl.service';
import { ModalController } from '@ionic/angular';
import {isDesktop} from "../../../shared/utils/window.util";

@Component({
  selector: 'fateh-friends-list-section',
  templateUrl: './friends-list-section.component.html',
  styleUrls: ['./friends-list-section.component.scss'],
})
export class FriendsListSectionComponent {
  public isDesktop = isDesktop();

  constructor(
    public rtlService: RtlService,
    private modalController: ModalController
  ) {}
}
