import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myMail = 'Arriel12@gmail.com';
  myLocation = 'Ets Efraim, Israel';
  myPhone = '+972 509553255';

  constructor() { }

  ngOnInit(): void {
  }

}
