import { Component } from '@angular/core';
import {isDesktop} from "../../shared/utils/window.util";
@Component({
  selector: 'fateh-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  constructor() {}
  public isDesktop = isDesktop();
}
