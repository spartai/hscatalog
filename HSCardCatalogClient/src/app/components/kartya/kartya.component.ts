import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kartya',
  templateUrl: './kartya.component.html',
  styleUrls: ['./kartya.component.scss']
})

@Injectable()
export class KartyaComponent implements OnInit {

  id = "";
  cardUrl = "";

  card = [];
  private routeSub: Subscription;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.cardUrl = `http://localhost:8080/card/${this.id}`;
  
    this.http.get(this.cardUrl, httpOptions).subscribe((data: any[]) => {
      this.card = data;
    });
  }

 

}
