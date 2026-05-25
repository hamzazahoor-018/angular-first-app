import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
})
export class ShortPipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 40): string {
    if (!value) {
      return '';
    }

    return value.length > limit ? `${value.slice(0, limit).trimEnd()}...` : value;
  }
}