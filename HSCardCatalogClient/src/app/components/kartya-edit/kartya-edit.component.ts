import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../../card';
import { CardService } from '../../card.service';

@Component({
  selector: 'kartya-edit',
  templateUrl: './kartya-edit.component.html',
  styleUrls: ['./kartya-edit.component.scss']
})
export class KartyaEditComponent implements OnInit {
  private id: number

  card: Card = new Card();




  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location,
    private cardService: CardService
  ) { 

  }

  async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id) {
      this.card = await this.cardService.getCard(this.id);
    }
  }

  async onFormSave(card: Card) {
    if(this.id) {
      // ha már létezik, felülírás
      await this.cardService.modifyCard(this.id, card)
      this.location.back();
    }
    else  {
      // új hozzáadás
      await this.cardService.addCard(card);
      this.router.navigate(['/kartyak']);
    }
  }

}
