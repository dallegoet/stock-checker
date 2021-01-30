const {firefox} = require('playwright');
const chalk = require('chalk');
const config = require('./config'); 
const Audic = require("audic")

const {DateTime} = require('luxon');

const log = (provider, product, status, statusColor) => {
    const now = DateTime.local().toFormat("HH:mm:ss");
    process.stdout.write(`\n${chalk.black.bgWhite(now + ' ' + provider.getName().padEnd(15))} ${chalk.bold(product.label.padEnd(27))} ${statusColor(status.padEnd(10))}`);
}

(async () => {
    const browser = await firefox.launch({
        headless: false, 
        slowMo: 1000,
    });
    const page = await browser.newPage();
    await page.setViewportSize({
        width: 1000,
        height: 1400,
    });


    while (true) {
        const randomProducts = config.products.sort(function (a, b) {return 0.5 - Math.random()});
        for (let i = 0; i < randomProducts.length; i++) {
            const product = randomProducts[i];
            const provider = product.provider;

            log(provider, product, 'EN COURS', chalk.yellow);

            try {
                const isAvailable = await provider.isAvailable(page, product);

                process.stdout.moveCursor(0, -1) // up one line
                process.stdout.clearLine(1) // from cursor to end

                if (isAvailable) {
                    log(provider, product, 'DISPONIBLE', chalk.green);
                    new Audic("available.mp3").play()
                } else {
                    log(provider, product, 'RUPTURE', chalk.red);
                }
            } catch (e) {
                log(provider, product, 'ERREUR', chalk.yellow);
                console.error(e);
            }

            await page.waitForTimeout(5000);
        }

    }
})();