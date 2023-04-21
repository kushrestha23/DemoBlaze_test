"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chai_1 = require("chai");
require("mocha");
const node_test_1 = require("node:test");
describe("DemoBlaze website", () => {
    let driver;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        driver = yield new selenium_webdriver_1.Builder().forBrowser("chrome").build();
        yield driver.get("https://www.demoblaze.com/");
    }));
    (0, node_test_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield driver.quit();
    }));
    it("Should navigate to the correct URL", () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedUrl = "https://www.demoblaze.com/index.html";
        const currentUrl = yield driver.getCurrentUrl();
        (0, chai_1.expect)(currentUrl).to.equal(expectedUrl);
    }));
});
//# sourceMappingURL=demoblaze.test.js.map