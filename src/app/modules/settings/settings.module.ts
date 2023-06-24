import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { ChangeLanguageComponent } from './change-language/change-language.component';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { LogoutPopoverComponent } from './logout-popover/logout-popover.component';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsListComponent,
    ChangeLanguageComponent,
    LogoutPopoverComponent,
  ],
  imports: [CommonModule, SettingsRoutingModule, TranslateModule, IonicModule],
})
export class SettingsModule {}
