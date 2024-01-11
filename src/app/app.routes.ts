import { Routes } from '@angular/router';
import {ItemOverviewComponent} from "./items/item-overview/item-overview.component";
import {ItemDetailComponent} from "./items/item-detail/item-detail.component";
import {ItemUpdateComponent} from "./items/item-update/item-update.component";
import {ItemCreateComponent} from "./items/item-create/item-create.component";
import {ShoppingCartComponent} from "./shopping/shopping-cart/shopping-cart.component";

export const routes: Routes = [
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/create', component: ItemCreateComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'items/:id/update', component: ItemUpdateComponent},
  {path: 'cart', component: ShoppingCartComponent},
];
