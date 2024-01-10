import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly _url: string;
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this._url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }

  getItem(itemId: number): Observable<Item> {
    return this.http.get<Item>(`${this._url}/${itemId}`);
  }
}
