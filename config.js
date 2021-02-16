const boulanger = require('./providers/boulanger');
const fnac = require('./providers/fnac');
const ldlc = require('./providers/ldlc');
const micromania = require('./providers/micromania');

module.exports = {
    products: [
        {
            label: 'XBOX Series X',
            url: 'https://www.fnac.com/Console-Microsoft-Xbox-Series-X-Noir/a15089504/w-4',
            provider: fnac,
        },
        //{
        //    label: 'XBOX Series S',
        //    url: 'https://www.fnac.com/Console-Microsoft-Xbox-Series-S-Blanc/a15089500/w-4',
        //    provider: fnac,
        //},
        {
            label: 'PS5 Edition Standard',
            url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4',
            provider: fnac,
        },
        {
            label: 'PS5 Edition Digitale',
            url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Digital/a14119961/w-4',
            provider: fnac,
        },
        {
            label: 'XBOX Series X',
            url: 'https://www.micromania.fr/xbox-series-x-1to-105643.html',
            provider: micromania,
        },
        //{
        //    label: 'XBOX Series S',
        //    url: 'https://www.micromania.fr/xbox-series-s-512go-107086.html',
        //    provider: micromania,
        //},
        {
            label: 'PS5 Edition Digitale',
            url: 'https://www.micromania.fr/playstation-5-alldigital-106097.html',
            provider: micromania,
        },
        {
            label: 'XBOX Series X',
            url: 'https://www.boulanger.com/ref/1147987',
            provider: boulanger,
        },
        //{
        //    label: 'XBOX Series S',
        //    url: 'https://www.boulanger.com/ref/1147988',
        //    provider: boulanger,
        //},
        {
            label: 'PS5 Edition Standard',
            url: 'https://www.boulanger.com/ref/1147567',
            provider: boulanger,
        },
        {
            label: 'PS5 Edition Digitale',
            url: 'https://www.boulanger.com/ref/1147568',
            provider: boulanger,
        },
        {
            label: 'INNO3D GeForce RTX 3060 Ti TWIN X2',
            url: 'https://www.ldlc.com/fiche/PB00394373.html',
            provider: ldlc,
        },
        {
            label: 'EVGA GeForce RTX 3060 Ti XC GAMING',
            url: 'https://www.ldlc.com/fiche/PB00398042.html',
            provider: ldlc,
        },
        {
            label: 'INNO3D GeForce RTX 3060 Ti TWIN X2 OC',
            url: 'https://www.ldlc.com/fiche/PB00394375.html',
            provider: ldlc,
        },
        {
            label: 'ZOTAC GeForce RTX 3060 Ti Twin Edge OC',
            url: 'https://www.ldlc.com/fiche/PB00394060.html',
            provider: ldlc,
        },
    ]
}