import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import {getWindow} from "../../shared/utils/window.util";

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'friends',
        loadChildren: () =>
          import('../friends/friends.module').then(m => m.FriendsModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(m => {
            if (getWindow()) {
              setTimeout(() => {
                getWindow()
                  ?.document.getElementById('splash')
                  ?.classList.add('loaded');
                setTimeout(() => {
                  getWindow()
                    ?.document.getElementById('splash')
                    ?.classList.add('hidden');
                }, 500);
              }, 500);
            }
            return m.SettingsModule;
          }),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
