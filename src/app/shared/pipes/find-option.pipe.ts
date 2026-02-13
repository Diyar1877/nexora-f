import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'findOption',
    standalone: true
})
export class FindOptionPipe implements PipeTransform {
    transform(options: any[], value: string | null): any {
        if (!value || !options) return null;
        return options.find(option => option.value === value);
    }
}
