import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { FriendsComponent } from './friends.component';
import {isDesktop} from "../../shared/utils/window.util";

const routes: Routes = [];

const routesToBeInjected: Routes = [];

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
              component: FriendsComponent,
              children: [...routesToBeInjected],
            },
          ];
        } else {
          return [
            {
              path: '',
              component: FriendsComponent,
            },
            ...routesToBeInjected,
          ];
        }
      },
      multi: true,
    },
  ],
})
export class FriendsRoutingModule {}
