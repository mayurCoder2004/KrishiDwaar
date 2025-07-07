const puppeteer = require('puppeteer');

const getMandiPrices = async (req, res) => {
  const url = "https://agmarknet.gov.in/SearchCmmMkt.aspx";

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      timeout: 0,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 });

    // ✅ Wait for at least 1 option in Commodity dropdown to appear
    await page.waitForFunction(() => {
      const select = document.querySelector('#cphBody_ddlCommodity');
      return select && select.options.length > 1;
    }, { timeout: 30000 });

    // Select values (adjust the values according to available options)
    await page.select('#cphBody_ddlCommodity', 'Wheat');
    await page.waitForTimeout(1000);
    await page.select('#cphBody_ddlState', 'Karnataka');
    await page.waitForTimeout(1000);
    await page.select('#cphBody_ddlMarket', 'Hubli');
    await page.waitForTimeout(1000);

    // Submit the form
    await Promise.all([
      page.click('#cphBody_btnSubmit'),
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 0 })
    ]);

    // ✅ Wait for the price table to appear
    await page.waitForSelector('#cphBody_GridPrice', { timeout: 20000 });

    // Extract table data
    const prices = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll("#cphBody_GridPrice tr"));
      const data = [];

      rows.forEach((row) => {
        const cols = row.querySelectorAll("td");
        if (cols.length >= 8) {
          const commodity = cols[0].innerText.trim();
          const market = cols[1].innerText.trim();
          const state = cols[2].innerText.trim();
          const price = cols[4].innerText.trim();
          const date = cols[7].innerText.trim();

          if (commodity && market && price) {
            data.push({ commodity, market, state, price, date });
          }
        }
      });

      return data;
    });

    await browser.close();
    res.json({ success: true, data: prices });
  } catch (error) {
    console.error("Scraping failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch mandi prices",
      error: error.message
    });
  }
};

module.exports = { getMandiPrices };
