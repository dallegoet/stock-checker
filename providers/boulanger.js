module.exports = {
    getName: () => {
        return 'boulanger.com';
    },

    isAvailable: async (page, product) => {
        await page.goto(product.url);

        // refuse cookies
        try {
            const handle = await page.$('#privacy-iframe');
            const contentFrame = await handle.contentFrame();
            await contentFrame.click('#btnAll-off', {
                timeout: 5000,
            });
        } catch (e) {
            // do nothing
        }

        let isAvailable = null;
        try {
            await page.waitForSelector('.buttonOrange.x-addToCart', {
                state: 'visible',
                timeout: 5000,
            });
            isAvailable = true;
        } catch (e) {
            isAvailable = false;
        }

        return isAvailable;
    }
}