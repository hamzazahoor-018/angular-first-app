import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags',
  standalone: true,
  pure: false,
})
export class TagsPipe implements PipeTransform {
  transform(values: readonly string[] | null | undefined, separator = ' • '): string {
    return values?.join(separator) ?? '';
  }
}