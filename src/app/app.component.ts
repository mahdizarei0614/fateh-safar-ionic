import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RtlService } from './shared/services/rtl.service';
import {getWindow} from "./shared/utils/window.util";
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private rtlService: RtlService
  ) {
    const cachedLang = getWindow()?.localStorage.getItem('lang');
    translate.setDefaultLang(
      cachedLang && cachedLang !== 'null' ? String(cachedLang) : 'fa'
    );
    translate.use(
      cachedLang && cachedLang !== 'null' ? String(cachedLang) : 'fa'
    );
    const theme = getWindow()?.localStorage.getItem('theme');
    if (theme === 'dark') {
      getWindow()?.document.body.classList.add('dark');
    }
    const direction = getWindow()?.localStorage.getItem('dir');
    if (direction === 'rtl') {
      getWindow()?.document.body.setAttribute('dir', 'rtl');
    }
  }
}
