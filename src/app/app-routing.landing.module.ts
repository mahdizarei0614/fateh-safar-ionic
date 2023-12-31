import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./modules/landing/landing.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: "full"
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
