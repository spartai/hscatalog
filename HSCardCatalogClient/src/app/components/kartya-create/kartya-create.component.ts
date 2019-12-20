import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../card';
import { CardService } from '../../card.service';

@Component({
  selector: 'kartya-create',
  templateUrl: './kartya-create.component.html',
  styleUrls: ['./kartya-create.component.scss']
})
export class KartyaCreateComponent implements OnInit {

  //private id: number

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location,
    private cardService: CardService
  ) { }

  ngOnInit() {
  }

  async onFormSave(card: Card) {
    await this.cardService.addCard(card);
    this.router.navigate(['/kartyak']);
  }

}
