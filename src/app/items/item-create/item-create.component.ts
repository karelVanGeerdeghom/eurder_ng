import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    PriceCurrencyPipe,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {
  private _defaultCurrency = 'EUR';
  private _itemForm = this.formBuilder.group({
    name: ['name', [Validators.required]],
    description: ['description', [Validators.required]],
    priceAmount: [10.0, [Validators.required]],
    amountInStock: [10, [Validators.required]],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router) {}

  createItem() {
    if (this._itemForm.valid) {
      let createItemDto = {
        name: this._itemForm.value.name!,
        description: this._itemForm.value.description!,
        price: {
          amount: this._itemForm.value.priceAmount!,
          currency: this._defaultCurrency,
        },
        amountInStock: this._itemForm.value.amountInStock!,
      }

      this.itemService.createItem(createItemDto).subscribe(item => {
        this.router.navigateByUrl(`items/${item.id}`).then();
      });
    }
  }

  get defaultCurrency() {
    return this._defaultCurrency;
  }

  get itemForm() {
    return this._itemForm;
  }
}
