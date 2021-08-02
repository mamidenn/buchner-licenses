import { setWorldConstructor } from "@cucumber/cucumber";

export class CustomWorld {
  variable = 0;
  setTo = (number: number) => {
    this.variable = number;
  };
  incrementBy = (number: number) => {
    this.variable += number;
  };
}

setWorldConstructor(CustomWorld);
