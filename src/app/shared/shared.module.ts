import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonImageComponent } from './components/skeleton-image/skeleton-image.component';
import { IonicModule } from '@ionic/angular';
import { EmptyListComponent } from './components/empty-list/empty-list.component';

@NgModule({
  declarations: [SkeletonImageComponent, EmptyListComponent],
  imports: [CommonModule, IonicModule],
  exports: [SkeletonImageComponent, EmptyListComponent],
  providers: [],
})
export class SharedModule {}
