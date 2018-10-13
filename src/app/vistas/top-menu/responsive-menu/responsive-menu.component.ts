import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.css']
})
export class ResponsiveMenuComponent implements OnInit {
  form: any = document.getElementsByName('formNav');
  // formEntrie: any = ;
  // formEntrieDeep: any = Object.entries(this.formEntrie);
  input: any;
  constructor() {
  }

  ngOnInit() {
  }

  // turnOn() {
  //   const input = this.form[0][0];
  //   const inputArray = [this.form[0][1], this.form[0][2], this.form[0][3], this.form[0][4], this.form[0][5], this.form[0][6]];
  //   const aElement = document.getElementsByTagName('a');
  //   const aElemArray = [aElement[1], aElement[2], aElement[3], aElement[4], aElement[5], aElement[6] ];
  //   // console.log(inputArray);
  //   // console.log(aElemArray);

  //   if (input.checked === true) {
  //     // console.log('true');
  //     inputArray.forEach(checkbox => {
  //       checkbox.disabled = false;
  //       checkbox.style.display = 'inline-block';
  //     });
  //     aElemArray.forEach( a => {
  //       a.style.display = 'inline-block';
  //     });
  //   } else {
  //     // console.log('false');
  //     inputArray.forEach(checkbox => {
  //       checkbox.disabled = true;
  //     });
  //     // console.log(inputArray[0].disabled);
  //     // console.log(input.checked);
  //   }
  // }

  validate() {
    const input = this.form[0][0];
    if (input.checked === true) {
      input.checked = false;
    }
    // console.log(this.input.checked);
  }
  // on() {
  //   this.input.value = 'on';
  // }
  // return() {
  //   this.input.nodeValue = 'off';
  // }

}
