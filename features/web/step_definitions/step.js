const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai");

const fs = require("fs");
let credentials = JSON.parse(fs.readFileSync("./properties.json", "utf8"));


When("I enter email", async function () {
  let element = await this.driver.$("#identification");
  let email = credentials.USERNAME1;
  return await element.setValue(email);
});

When("I enter password", async function () {
  let element = await this.driver.$("#password");
  let password = credentials.PASSWORD1;
  return await element.setValue(password);
});

When("I click next", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

Then("I click on the dashboard", async function () {
  let element = await this.driver.$("#ember16");
  return await element.click();
});