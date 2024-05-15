
export class commonActionHelper {

    fillingData = async (page, locator, value) => {
        let element = await page.locator(locator);
        element.fill(value);
    }

    clickOnElement = async (page, locator) => {
        let clickele = await page.locator(locator);
        clickele.click()
    }
}