import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  protected hideTabs = false;

  public isShown() {
    return !this.hideTabs;
  }

  public hide() {
    this.hideTabs = true;
  }

  public show() {
    this.hideTabs = false;
  }
}
