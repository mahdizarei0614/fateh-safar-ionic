import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {RtlService} from "../../../shared/services/rtl.service";
import {getWindow, isDesktop} from "../../../shared/utils/window.util";

@Component({
  selector: 'fateh-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent implements OnInit {
  public currentLanguage = '';
  public isDesktop = isDesktop;

  constructor(
    private translateService: TranslateService,
    public rtlService: RtlService
  ) {}

  ngOnInit() {
    this.currentLanguage = this.getConfig();
  }

  changeLangEvent(event: any) {
    switch (event.detail.value) {
      case 'fa':
        this.changeLang(true, 'fa');
        break;
      case 'en':
        this.changeLang(false, 'en');
        break;
    }
  }

  private changeLang(rtl: boolean, lang: string) {
    getWindow()?.document.body.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    this.rtlService.setRtl(rtl);
    this.rtlService.saveConfig();
    this.translateService.use(lang);
    this.saveSelectedLang(lang);
  }

  private getConfig(): string {
    const rtl = this.rtlService.isRtl;
    const lang = this.translateService.currentLang;
    return lang;
  }

  private saveSelectedLang(lang: string) {
    getWindow()?.localStorage.setItem('lang', lang);
  }
}
