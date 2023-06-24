import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'fateh-logout-popover',
  templateUrl: './logout-popover.component.html',
  styleUrls: ['./logout-popover.component.scss'],
})
export class LogoutPopoverComponent {
  constructor(private popoverController: PopoverController) {}

  async closePopover() {
    await this.popoverController.dismiss({ role: 'destructive' });
  }
}
