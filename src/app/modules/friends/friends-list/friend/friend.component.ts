import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RtlService } from '../../../../shared/services/rtl.service';

@Component({
  selector: 'fateh-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  @Input() friend = { name: '', matrixId: '' };
  @Input() isLast = false;
  @Input() selectionStyle = false;
  @Output() changeSelection = new EventEmitter();
  public onlineStatus = '';

  constructor(public rtlService: RtlService) {}

  ngOnInit() {
    this.updateStatus();
  }

  async updateStatus() {
  }

  public change(event: any) {
    this.changeSelection.emit(event.detail);
  }
}
