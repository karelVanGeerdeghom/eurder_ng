import {Component, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";

@Component({
  selector: 'app-item-update',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    PriceCurrencyPipe
  ],
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit {
  private _item: Item | undefined;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    this.getItem(this.activatedRoute.snapshot.params['id']);
  }

  getItem(itemId: number) {
    this.itemService.getItem(itemId).subscribe(item => this._item = item);
  }

  get item() {
    return this._item;
  }
}
