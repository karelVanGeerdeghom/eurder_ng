import { Pipe, PipeTransform } from '@angular/core';
import {ItemDto} from "../dto/ItemDto";

@Pipe({
  name: 'itemNameFilter',
  standalone: true
})
export class ItemNameFilterPipe implements PipeTransform {

  transform(items: ItemDto[] | null, nameFilter: string | undefined): ItemDto[] | null {
    if (items !== null && nameFilter !== undefined) {
      return items.filter(item => item.name.toLocaleLowerCase().indexOf(nameFilter.toLocaleLowerCase()) === 0);
    }

    return items;
  }

}
