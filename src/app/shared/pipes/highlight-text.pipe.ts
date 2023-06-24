import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
  pure: false,
  standalone: true,
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: string | undefined, ...args: string[]): unknown {
    if (!args[0]?.length) {
      return value;
    }
    return (value as string).replace(
      new RegExp(args[0], 'g'),
      `<mark>${args[0]}</mark>`
    );
  }
}
