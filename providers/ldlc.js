module.exports = {
    getName: () => {
        return 'ldlc.com';
    },

    isAvailable: async (page, product) => {
        await page.goto(product.url);

        let isAvailable = null;
        try {
            await page.waitForSelector('.product-info .add-to-cart', {
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