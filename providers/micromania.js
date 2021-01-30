module.exports = {
    getName: () => {
        return 'micromania.fr';
    },

    isAvailable: async (page, product) => {
        let isAvailable = null;

        await page.goto(product.url, {
            waitUntil: 'domcontentloaded',
        });

        // delete cookies banner from the dom
        await page.evaluate(async () => {
            var elem = document.querySelector('.truste_overlay');
            elem && elem.parentNode.removeChild(elem);
            elem = document.querySelector('.truste_box_overlay');
            elem && elem.parentNode.removeChild(elem);
        });

        try {
            await page.waitForSelector('.add-to-cart-section .add-to-cart', {
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