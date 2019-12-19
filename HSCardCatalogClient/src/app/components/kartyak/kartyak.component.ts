import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-kartyak',
  templateUrl: './kartyak.component.html',
  styleUrls: ['./kartyak.component.scss']
})

@Injectable()
export class KartyakComponent implements OnInit {

  cardsUrl = 'http://localhost:8080/card';

  cards = [];

  originData = [];

  nameResult = [];
  hpResult = [];
  damageResult = [];
  manaResult = [];
  classResult = [];

  result = [];

  searchForm: FormGroup;

  intersection(arrays) {
    var result = [];
    var lists;
  
    lists = arrays;
  
    for(var i = 0; i < lists.length; i++) {
      var currentList = lists[i];
      for(var y = 0; y < currentList.length; y++) {
          var currentValue = currentList[y];
        if(result.indexOf(currentValue) === -1) {
          var existsInAll = true;
          for(var x = 0; x < lists.length; x++) {
            if(lists[x].indexOf(currentValue) === -1) {
              existsInAll = false;
              break;
            }
          }
          if(existsInAll) {
            result.push(currentValue);
          }
        }
      }
    }
    return result;
  }

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.searchForm = this.fb.group({
      name: [''],
      mana: [''],
      hp: [''],
      damage: [''],
      class: ['']
    });
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.get(this.cardsUrl, httpOptions).subscribe((data: any[]) => {
      this.originData = data;
      this.cards = data;
    });

  }

  onSubmit(form) {

    this.nameResult = [];
    this.hpResult = [];
    this.damageResult = [];
    this.manaResult = [];
    this.classResult = [];
    this.cards = this.originData;

      if(this.searchForm.get('name').value != "" && this.searchForm.get('name') != null) {
        for (let card of this.cards) {
          if (card.name.toLowerCase().includes(this.searchForm.get('name').value.toLowerCase())) {
            this.nameResult.push(card);
          }
        }
      }
      if(this.searchForm.get('damage').value != "" && this.searchForm.get('damage') != null) {
        for (let card of this.cards) {
          if (card.damage == parseInt(this.searchForm.get('damage').value)) {
            this.damageResult.push(card);
          }
        }
      }
      if(this.searchForm.get('hp').value != "" && this.searchForm.get('hp') != null) {
        for (let card of this.cards) {
          if (card.hp == parseInt(this.searchForm.get('hp').value)) {
            this.hpResult.push(card);
          }
        }
      }
      if(this.searchForm.get('mana').value != "" && this.searchForm.get('mana') != null) {
        for (let card of this.cards) {
          if (card.mana == parseInt(this.searchForm.get('mana').value)) {
            this.manaResult.push(card);
          }
        }
      }
      console.log(this.searchForm.get('class').value.toLowerCase());
      if(this.searchForm.get('class').value != "" && this.searchForm.get('class') != null) {
        for (let card of this.cards) {
          if (card.cardClass == this.searchForm.get('class').value) {
            this.classResult.push(card);
          }
          if (card.cardClass == null && this.searchForm.get('class').value == "Neutral") {
            this.classResult.push(card);
          }
          if(this.searchForm.get('class').value == "All") {
            this.classResult = [];
          }
        }
      }

      if(this.searchForm.get('damage').value == "0") {
        for (let card of this.cards) {
          if(card.damage == null) {
            this.damageResult.push(card);
          }
        }
      }

      if(this.searchForm.get('hp').value == "0") {
        for (let card of this.cards) {
          if(card.hp == null) {
            this.hpResult.push(card);
          }
        }
      }

      let arrays = [];
      if (Array.isArray(this.nameResult) && this.nameResult.length) {
        arrays.push(this.nameResult);
      }
      if (Array.isArray(this.manaResult) && this.manaResult.length) {
        arrays.push(this.manaResult);
      }
      if (Array.isArray(this.hpResult) && this.hpResult.length) {
        arrays.push(this.hpResult);
      }
      if (Array.isArray(this.damageResult) && this.damageResult.length) {
        arrays.push(this.damageResult);
      }
      if (Array.isArray(this.classResult) && this.classResult.length) {
        arrays.push(this.classResult);
      }
      this.result = this.intersection(arrays);

      console.log(this.result)

      if(this.result.length == 0) {
        this.result = this.originData;
      }

      this.cards = this.result;
    }
}
