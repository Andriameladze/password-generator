import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  password = '';
  charLength = 1;
  checked = 5;
  uppercaseChecked = false;
  lowercaseChecked = false;
  numbersChecked = false;
  symbolsChecked = false;

  uppercaseCheck(event: any): void {
    this.uppercaseChecked = event.target.checked;
  }

  lowercaseCheck(event: any): void {
    this.lowercaseChecked = event.target.checked;
  }

  numbersCheck(event: any): void {
    this.numbersChecked = event.target.checked;
  }

  symbolsCheck(event: any): void {
    this.symbolsChecked = event.target.checked;
  }

  characterValue(event: any) {
    this.charLength = Number(event.target.value);
  }

  checkboxCheck(event: any) {
    let value = event.target.value;
    // if (event.target.value == 'lowercase') {
    //   this.lowercaseChecked = event.target.checked;
    // } else if (event.target.value == 'uppercase') {
    //   this.uppercaseChecked = event.target.checked;
    // }

    switch (value) {
      case 'lowercase':
        this.lowercaseChecked = event.target.checked;
        break;
      case 'uppercase':
        this.uppercaseChecked = event.target.checked;
        break;
      case 'numbers':
        this.numbersChecked = event.target.checked;
        break;
      case 'symbols':
        this.symbolsChecked = event.target.checked;
        break;
    }
  }

  generatePassword(passwordLength: number) {
    let numberChars = '0123456789';
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let symbolChars = "!'#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let allChars = numberChars + upperChars + lowerChars + symbolChars;
    let randPasswordArray = Array(passwordLength);

    // randPasswordArray[1] = lowerChars;
    // randPasswordArray[2] = numberChars;
    // randPasswordArray[3] = symbolChars;

    if (this.uppercaseChecked) {
      randPasswordArray[0] = upperChars;
      randPasswordArray = randPasswordArray.fill(upperChars, 1);
    } else if (this.lowercaseChecked) {
      randPasswordArray[0] = lowerChars;
      randPasswordArray = randPasswordArray.fill(lowerChars, 1);
    } else if (this.numbersChecked) {
      randPasswordArray[0] = numberChars;
      randPasswordArray = randPasswordArray.fill(numberChars, 1);
    } else if (this.symbolsChecked) {
      randPasswordArray[0] = symbolChars;
      randPasswordArray = randPasswordArray.fill(symbolChars, 1);
    }

    randPasswordArray = randPasswordArray.fill(allChars, 4);

    this.password = this.shuffleArray(
      randPasswordArray.map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
    ).join('');
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
