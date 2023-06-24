import { Component } from '@angular/core';
import {getWindow, isDesktop} from "../../../shared/utils/window.util";
import {RtlService} from "../../../shared/services/rtl.service";

@Component({
  selector: 'fateh-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
})
export class SettingsListComponent {
  public isDesktop = isDesktop();
  public categories: SettingCategory[] = [
    {
      categoryKey: 'settingsPage.listGeneral.header',
      items: [
        {
          itemKey: 'settingsPage.listGeneral.itemLanguage',
          icon: 'language',
          type: 'link',
          href: ['', 'home', 'settings', 'language'],
        },
      ],
    },
    {
      categoryKey: 'settingsPage.listAppearance.header',
      items: [
        {
          itemKey: 'settingsPage.listAppearance.itemDarkTheme',
          icon: 'moon',
          type: 'toggle',
          toggleIsChecked: () => {
            const theme = getWindow()?.localStorage.getItem('theme');
            if (theme === 'dark') {
              getWindow()?.document.body.classList.add('dark');
            }
            return !!getWindow()?.document.body.classList.contains('dark');
          },
          toggleFunction: (event: any) => {
            console.log(event.detail.checked)
            if (event.detail.checked) {
              getWindow()?.document.body.classList.add('dark');
              getWindow()?.localStorage.setItem('theme', 'dark');
            } else {
              getWindow()?.document.body.classList.remove('dark');
              getWindow()?.localStorage.setItem('theme', 'light');
            }
          },
        },
      ],
    },
  ];

  constructor(public rtlService: RtlService) {}
}

declare type SettingCategory = {
  categoryKey: string;
  items: SettingItem[];
};

declare type SettingItem = {
  itemKey: string;
  icon: string;
  type: string;
  href?: string[];
  toggleIsChecked?: any;
  toggleFunction?: any;
};
