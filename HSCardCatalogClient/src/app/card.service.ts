import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { httpOptions } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class CardService {
      private cardUrl = 'http://localhost:8080/issue';




      constructor (
          private http: HttpClient
      ) {}

      getCards(): Promise<Card[]> {
          return this.http.get<Card[]>(this.cardUrl).toPromise();
      }

      getCard(id: number): Promise<Card> {
          return this.http.get<Card>(`${this.cardUrl}/${id}`).toPromise();
      }

      modifyCard(id: number, card: Card): Promise<Card> {
          return this.http.put<Card>(`${this.cardUrl}/${id}`, card).toPromise();
      }

      addCard(card: Card): Promise<Card> {
          return this.http.post<Card>(this.cardUrl, card).toPromise();
      }
  }