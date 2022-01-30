// code here code .
const { chromium } = require('playwright')

;(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    
    await page.goto('https://es.cointelegraph.com/')
    await page.screenshot({ path: 'ss.png' })
    await browser.close()
})()