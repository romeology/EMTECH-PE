import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
Met: number;
CalBurn: number;
kg: number;
mins: number;
kglost: number;

CalculateCalBurn(exercise) {
this.Met = exercise;
this.CalBurn=(this.Met * 3.5 * (this.kg/200)) *this.mins;
this.CalBurn = parseFloat(this.CalBurn.toFixed(2));
this.kglost = this.CalBurn / 7700;
this.kglost = parseFloat(this.kglost.toFixed(2));

   

  
}
}
