import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { CustomWorld } from "./world";

Given<CustomWorld>("a variable set to {int}", function (number) {
  this.setTo(number);
});

When<CustomWorld>("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then<CustomWorld>("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});
