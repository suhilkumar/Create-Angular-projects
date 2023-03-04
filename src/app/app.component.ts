import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  isDisabled: boolean = true;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  password: string = '';
  constructor() {}
  getLength(value: string): void {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  
  generate() {
    console.log(`about to create password:
      include letters: ${this.includeLetters}
      include Numbers: ${this.includeNumbers}
      include Symbols: ${this.includeSymbols}
      `);
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbol: string = '!@$%^&*#';
    let validChars: string = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbol;
    }
    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }
  getSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log(` symbol clicked ${this.includeSymbols}`);
  }
  getLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(`letters clicked ${this.includeLetters}`);
  }
  getNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log(` Numbers clicked ${this.includeNumbers}`);
  }
}
