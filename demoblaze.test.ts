import { Builder, By, Key, WebDriver, until } from "selenium-webdriver";
import { expect } from "chai";
import "mocha";
import { afterEach } from "node:test";

describe("DemoBlaze website", () => {
  let driver: WebDriver;
  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.demoblaze.com/");
  });
  afterEach(async () => {
    await driver.quit();
  });

  it("Should navigate to the correct URL", async () => {
    const expectedUrl = "https://www.demoblaze.com/index.html";
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl);
  });
});
