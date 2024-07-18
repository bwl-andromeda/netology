import puppeteer from "puppeteer";

describe('Tooltip', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:9000');
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should show tooltip on button click', async () => {
        // Trigger button click event
        await page.click('.button');

        // Wait for tooltip to become visible
        await page.waitForSelector('.origin');

        // Check if tooltip is visible
        const tooltipVisible = await page.$eval('.tooltip.active', tooltip => tooltip.style.display !== 'none');
        expect(tooltipVisible).toBeTruthy();
    });
});
