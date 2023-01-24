import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  password = 'PASSWOrD';
  character = 0;
  checked = 5;
  uppercaseChecked = false;
  lowercaseChecked = false;
  numbersChecked = false;
  symbolsChecked = false;

  uppercaseRegex = '';
  lowercaseRegex = '';
  numbersRegex = '';
  symbolsRegex = '';

  uppercaseCheck(event: any): void {
    this.uppercaseChecked = event.target.checked;
    console.log(this.uppercaseChecked);
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
    this.character = event.target.value;
  }
}
