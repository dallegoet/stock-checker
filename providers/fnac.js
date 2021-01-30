module.exports = {
    getName: () => {
        return 'fnac.com';
    },

    isAvailable: async (page, product) => {
        await page.goto(product.url);

        let isAvailable = null;
        try {
            await page.waitForSelector('.f-buyBox-availabilityStatus-available', {
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