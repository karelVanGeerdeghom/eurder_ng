import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ItemDto} from "../dto/ItemDto";
import {CreateItemDto} from "../dto/CreateItemDto";
import {UpdateItemDto} from "../dto/UpdateItemDto";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly _url: string;
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this._url = `${environment.backendUrl}/items`;
  }

  findAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(this._url);
  }

  findById(itemId: number): Observable<ItemDto> {
    return this.http.get<ItemDto>(`${this._url}/${itemId}`);
  }

  createItem(createItemDto: CreateItemDto): Observable<ItemDto> {
    return this.http.post<ItemDto>(this._url, createItemDto, {
      headers: {
        email: 'admin@eurder_db.com',
        password: 'admin'
      }
    });
  }

  updateItem(itemId: number, updateItemDto: UpdateItemDto): Observable<ItemDto> {
    return this.http.put<ItemDto>(`${this._url}/${itemId}`, updateItemDto, {
      headers: {
        email: 'admin@eurder_db.com',
        password: 'admin'
      }
    });
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete(`${this._url}/${itemId}`, {
      headers: {
        email: 'admin@eurder_db.com',
        password: 'admin'
      }
    });
  }
}
