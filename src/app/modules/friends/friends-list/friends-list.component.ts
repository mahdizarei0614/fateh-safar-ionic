import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {isDesktop} from "../../../shared/utils/window.util";

@Component({
  selector: 'fateh-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  @Input() selectionStyle = false;
  @Output() selectionList = new EventEmitter();
  public isDesktop = isDesktop();
  public friends = [];
  public friendsSelection = [];

  constructor() {}

  ngOnInit() {
    this.friendsSelection = JSON.parse(JSON.stringify(this.friends));
  }

  public changeSelection(event: any) {
    (
      this.friendsSelection.find((i: any) => i.matrixId === event.value) as any
    ).checked = event.checked;
    this.selectionList.emit(this.friendsSelection);
  }
}
