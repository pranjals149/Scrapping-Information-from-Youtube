const puppeteer = require('puppeteer');
const scrap = require('./scrap');

try {
    (async () => {

        let keywords = [
            'OpenSource',
            'Software Developer',
            'author',
            'developer',
        ];

        const browser = await puppeteer.launch();
        let results = await youtube.scrape_info(browser, keywords);
        console.dir(results, {depth: null, colors: true});

        await browser.close();

    })()
} catch (err) {
    console.error(err)
}