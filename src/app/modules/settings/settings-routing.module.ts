import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ChangeLanguageComponent } from './change-language/change-language.component';
import {isDesktop} from "../../shared/utils/window.util";

const routes: Routes = [];

const routesToBeInjected = [
  {
    path: 'language',
    component: ChangeLanguageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        if (isDesktop()) {
          return [
            {
              path: '',
              component: SettingsComponent,
              children: [...routesToBeInjected],
            },
          ];
        } else {
          return [
            {
              path: '',
              component: SettingsComponent,
            },
            ...routesToBeInjected,
          ];
        }
      },
      multi: true,
    },
  ],
})
export class SettingsRoutingModule {}
