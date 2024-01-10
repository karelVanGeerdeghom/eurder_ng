import {Component, inject, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ItemNameFilterPipe} from "../pipe/item-name-filter.pipe";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-item-overview',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ItemNameFilterPipe,
    RouterLink
  ],
  templateUrl: './item-overview.component.html',
  styleUrl: './item-overview.component.css'
})
export class ItemOverviewComponent implements OnInit {
  private itemService: ItemService = inject(ItemService);

  public _items!: Item[];
  public itemNameSearch: string | undefined;

  constructor(public router: Router) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this._items = items);
  }

  get items() {
    return this._items;
  }
}
