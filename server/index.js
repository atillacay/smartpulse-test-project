/**
 * TODO:
 *
 * do a get call to url
 * filter response by contract value that starting with PH
 * numeric aprt of PH stands for PH22040108 >> 22 for year, 04 for month, 01 for day, 08 for hour
 * consolidate filtered data and send as response
 * Toplam işlem tutarı >> sum of (price*quantity)/10
 * Toplam işlem miktarı >> sum of quantity/10
 * Ağırlıklı ortalama fiyat >> sum of toplam islem tutarı / toplam işlem miktarı
 *
 */

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();
const port = 3030;

app.use(cors());

app.get("/", (req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const url = `https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${date}&startDate=${date}`;
  try {
    axios.get(url).then((response) => {
      const respData = response.data.body.intraDayTradeHistoryList;
      // contract key in the object has a typo written as conract
      const phReg = /(PH)/;
      //filter out PB contracts
      const phFiltered = respData.filter((item) => phReg.test(item.conract));
      //group PH contracts
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, []);
      }
      let contractGroups = groupBy(phFiltered, "conract");

      let summarizedData = [];
      // loop through groupped contracts and create object to send in response
      for (const key in contractGroups) {
        let innerItems = contractGroups[key];
        let totalTrxAmount = 0;
        let totalTrxQuantity = 0;
        let weightedAvg = 0;
        innerItems.map((i) => {
          // Toplam işlem tutarı >> sum of (price*quantity)/10
          totalTrxAmount += (parseFloat(i.price) * parseFloat(i.quantity)) / 10;
          // Toplam işlem miktarı >> sum of quantity/10
          // TODO:: quantity/10 doğru gösterim midir?
          totalTrxQuantity += parseInt(i.quantity) / 10;
          // Ağırlıklı ortalama fiyat >> sum of toplam islem tutarı / toplam işlem miktarı
          weightedAvg += parseFloat(totalTrxAmount / totalTrxQuantity);
        });
        // prepare dateString from key >> ph value
        let t = key;
        let yy = parseInt("20" + t.slice(2, 4));
        let mm = parseInt(t.slice(4, 6) - 1);
        let dd = parseInt(t.slice(6, 8));
        let ss = parseInt(t.slice(8, 10) - 3);
        let dateString = new Date(Date.UTC(yy, mm, dd, ss));

        summarizedData.push({
          contract: key,
          contractDate: dateString.toLocaleString("tr-TR"),
          totalTrxAmount: new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(totalTrxAmount),
          totalTrxQuantity: totalTrxQuantity.toFixed(2),
          weightedAvg: new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(weightedAvg),
        });
      }
      res.status(200).send(summarizedData);
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
