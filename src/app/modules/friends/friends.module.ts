import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { FriendsListSectionComponent } from './friends-list-section/friends-list-section.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendComponent } from './friends-list/friend/friend.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FriendsComponent,
    FriendsListSectionComponent,
    FriendsListComponent,
    FriendComponent,
  ],
  exports: [FriendsListComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    TranslateModule,
    IonicModule,
    SharedModule,
  ],
})
export class FriendsModule {}
