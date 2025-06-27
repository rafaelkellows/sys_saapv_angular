import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'go-back-navigation',
  imports: [CommonModule],
  templateUrl: 'go-back-navigation.html', 
  styleUrl: 'go-back-navigation.css', 
})
export class GoBackNavigation { 
  counter = 0;

  increaseCounter() {
    this.counter++;
  }

  public getCounter(){
    console.log(this.counter);
    return this.counter; 
  }
  constructor(private location: Location) {  }
  goBack(): void {
    this.location.back();
  }

}