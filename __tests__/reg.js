const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch( {headless:false} );
const page = await browser.newPage();
await page.goto ('https://www.tempmailaddress.com/', {waitUntil: 'domcontentloaded'});
await page.waitFor(10000);
const email = await page.evaluate(() => {
    return document.querySelector ("span#email").innerHTML
});
await page.goto('https://accounts.yellowpages.com/register');
await page.type("input[name^='user[first_name]']", "Ivan");
await page.type("input[name^='user[last_name]']", "Krylov");
await page.type("input[name^='user[email]']", email);
await page.type("input[name^='user[new_password]']", "Krylov123123");
await page.type("input[name^='user[new_password_confirmation]']", "Krylov123123");
await page.type("input[name^='user[zip_code]']", "90210");
await page.click("input[value^='Join YP!']");
 await browser.close();
})();

