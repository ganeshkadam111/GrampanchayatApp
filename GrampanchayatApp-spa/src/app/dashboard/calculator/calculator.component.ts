import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  lenght = 0;
  width = 0;
  area = 0;
  buildingAge = 0;
  yearlyRate = 0;
  constructionRate = 0;
  weight = 0;
  depreciationRate = 0;
  homeTax = 0;
  total = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculateArea(): any {
    this.area = this.lenght * this.width;
  }

  calculateTotal() {
    this.total = this.buildingAge + this.yearlyRate + this.constructionRate + this.weight +
      this.depreciationRate + this.homeTax;
  }
}
