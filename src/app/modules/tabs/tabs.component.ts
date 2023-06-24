import {Component, ElementRef, ViewChild} from '@angular/core';
import { TabsService } from '../../shared/services/tabs.service';
import { RtlService } from '../../shared/services/rtl.service';

@Component({
  selector: 'fateh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @ViewChild('tabs') tabsRef: ElementRef | undefined;

  constructor(public tabsService: TabsService, public rtlService: RtlService) {}

  public isActive(tabName: string) {
    // @ts-ignore
    return this.tabsRef?.getSelected() === tabName;
  }
}
