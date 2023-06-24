import { Injectable } from '@angular/core';
import {getWindow} from "../utils/window.util";

@Injectable({
  providedIn: 'root',
})
export class RtlService {
  private rtl = false;

  constructor() {
    this.rtl =
      getWindow()?.localStorage.getItem('dir') === 'rtl' ||
      !getWindow()?.localStorage.getItem('dir');
    if (this.rtl) {
      getWindow()?.document.body.setAttribute('dir', 'rtl');
    }
  }

  public get isRtl() {
    return this.rtl;
  }

  public setRtl(config: boolean) {
    this.rtl = config;
    this.saveConfig();
  }

  public saveConfig() {
    getWindow()?.localStorage.setItem('dir', this.rtl ? 'rtl' : 'ltr');
  }
}
