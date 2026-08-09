
import { expect, test } from "@playwright/test";

    
   test("Test annotation with skip when the test environment is not ready ", async ({ page }) => {
        // test("Test annotation with skip when the test environment is not ready ", async ({ page }) => {

        await page.goto("https://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("democsr2");
        await page.locator("#password").fill("crmsfa")

        await page.waitForTimeout(3000) // demo
        await page.locator(".decorativeSubmit").click();        
        await page.locator('//a[contains(text(),"CRM")]').click();
        console.log("BeforeEach Login happens for each module");       

    })