import { Component, OnInit } from '@angular/core';
import { BENEFITS } from  './Benefit/mock-benefits'
import { Benefit } from './Benefit/benefit';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {  
  title = 'ng-PetBoarding-app 99';
  benefits : Benefit[] = BENEFITS;

  ngOnInit(){
    console.table(this.benefits);
    this.getMessage(this.benefits[1]);
  }

  getMessage (benefit: Benefit) : void{
    console.log(`Vous avez choisi la prestation suivante : ${benefit.label} qui coûte ${benefit.cost}`);
  }
}
