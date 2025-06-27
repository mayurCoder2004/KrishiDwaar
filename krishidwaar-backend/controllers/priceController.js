const axios = require("axios");
const cheerio = require("cheerio");

const getMandiPrices = async (req, res) => {
  const url = "https://agmarknet.gov.in/SearchCmmMkt.aspx";

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const prices = [];

    $("table#cphBody_GridPrice tr").each((index, row) => {
      const cols = $(row).find("td");

      const commodity = $(cols[0]).text().trim();
      const market = $(cols[1]).text().trim();
      const state = $(cols[2]).text().trim();
      const price = $(cols[4]).text().trim();
      const date = $(cols[7]).text().trim();

      if (commodity && market && price) {
        prices.push({ commodity, market, state, price, date });
      }
    });

    res.json({ success: true, data: prices });
  } catch (error) {
    console.error("Scraping failed:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch mandi prices" });
  }
};

module.exports = { getMandiPrices };
