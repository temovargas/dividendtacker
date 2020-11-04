const apikey = "pk_1bbeb2c2429648b78f9f45db1c07a15c";
console.log("its wokring");
fetch(
  `https://cloud.iexapis.com/stable/stock/AAPL/dividends/1y?token=${apikey}`
)
  .then((res) => res.json())
  .then((data) => console.log(data));

// help

calYearlyDividend = (data) => {};
