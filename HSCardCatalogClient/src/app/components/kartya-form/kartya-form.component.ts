import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Card } from '../../card';

@Component({
  selector: 'kartya-form',
  templateUrl: './kartya-form.component.html',
  styleUrls: ['./kartya-form.component.scss']
})
export class KartyaFormComponent implements OnInit, OnChanges {
  private id: number;
  imgSrc: string

  cardForm = this.fb.group({
    name: ['', [Validators.required]]
  });
  @Input()
  card: Card;

  @Output()
  save = new EventEmitter<Card>();

  constructor(
    private fb: FormBuilder
    ) {

    this.id = -1;
  
  }
// mana: number, damage: number, hp: number, description: string, 
  ngOnInit() {
  }

  ngOnChanges() {
    this.imgSrc = "";
    this.cardForm.patchValue(this.card);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Card(), this.cardForm.value)
    );
  }
}
