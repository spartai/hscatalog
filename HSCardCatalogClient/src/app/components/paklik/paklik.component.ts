import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-paklik',
  templateUrl: './paklik.component.html',
  styleUrls: ['./paklik.component.scss']
})
export class PaklikComponent implements OnInit {

  deckUrl = 'http://localhost:8080/deck';

  decks = [];

  originData = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.get(this.deckUrl, httpOptions).subscribe((data: any[]) => {
      this.decks = data;
    });
  }

}
