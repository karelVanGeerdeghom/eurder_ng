import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {NgClass, NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";
import {
  ItemDescriptionLengthCounterComponent
} from "../item-description-length-counter/item-description-length-counter.component";

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    PriceCurrencyPipe,
    ReactiveFormsModule,
    RouterLink,
    ItemDescriptionLengthCounterComponent,
    NgClass,
  ],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {
  private _defaultCurrency = 'EUR';
  private _itemForm = this.formBuilder.group({
    name: ['name', [Validators.required]],
    description: ['description', [Validators.required, Validators.maxLength(255)]],
    priceAmount: [10.0, [Validators.required, Validators.min(0)]],
    amountInStock: [10, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router
  ) {}

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

  get name() {
    return this._itemForm.get('name');
  }

  get description() {
    return this._itemForm.get('description');
  }

  get priceAmount() {
    return this._itemForm.get('priceAmount');
  }

  get amountInStock() {
    return this._itemForm.get('amountInStock');
  }
}
