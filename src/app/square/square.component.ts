import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <ion-button color="tertiary" *ngIf="!value">{{ value }}</ion-button>
    <ion-button color="success" *ngIf="value == 'X'">{{ value }}</ion-button>
    <ion-button color="warning" *ngIf="value == 'O'">{{ value }}</ion-button>
  `,
  styles: ['ion-button{ width: 105px; height: 105px; font-size: 3em !important; justify-content: center; }']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}