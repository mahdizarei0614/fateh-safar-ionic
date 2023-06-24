import { animate, style, transition, trigger } from '@angular/animations';

export const Animations = {
  fadeInOut300: trigger('enterAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('300ms', style({ opacity: 0 })),
    ]),
  ]),
};
