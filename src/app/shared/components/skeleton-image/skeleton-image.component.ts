import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fateh-skeleton-image',
  templateUrl: './skeleton-image.component.html',
  styleUrls: ['./skeleton-image.component.scss'],
})
export class SkeletonImageComponent implements OnInit {
  @Input() public src = '';
  @Input() public textAvatar = '';
  public loaded = false;

  ngOnInit() {
    if (!this.src) {
      this.loaded = true;
    }
  }

  loadCompleted(): void {
    this.loaded = true;
  }

  default(): void {
    this.src = '';
    this.loaded = true;
  }
}
