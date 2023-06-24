import { Component } from '@angular/core';
import {RtlService} from "../../shared/services/rtl.service";
import {isDesktop} from "../../shared/utils/window.util";

@Component({
  selector: 'fateh-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public isDesktop = isDesktop();

  constructor(public rtlService: RtlService) {}
}
