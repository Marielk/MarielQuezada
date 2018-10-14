import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.css'],
})
export class ResponsiveMenuComponent implements OnInit {
  form: any = document.getElementsByName('form');
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

  enableButtons() {
    const input = this.form[0][0];
    const btn = document.getElementsByClassName('btnMenu');
    const btns = [btn[0], btn[1], btn[2], btn[3], btn[4], btn[5]];
     // console.log(btns);
    if (input.checked === true) {
      btns.forEach(buton => {
        buton.setAttribute('disabled', 'false');
        // console.log('false');
      });
    }
  }

  validate() {
    // const body = document.getElementsByTagName('body')[0];
    // body.style.display = 'inline';
    const input = this.form[0][0];
    if (input.checked === true) {
      input.checked = false;
    }
    // console.log(this.input.checked);
  }

  // back() {
  //   // const body = document.getElementsByTagName('body')[0];
  //   // body.style.display = '-webkit-box';
  //   // console.log(body.style.display);
  //   const input = this.form[0][0];
  //   if (input.checked === true) {
  //     input.checked = false;
  //   }
  // // on() {
  // //   this.input.value = 'on';
  // // }
  // // return() {
  // //   this.input.nodeValue = 'off';
  // // }
  // }
}
