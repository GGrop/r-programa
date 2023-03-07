let symbolList = [];

var myHeaders = new Headers();
myHeaders.append("apikey", "K1wPo186HgThBr8LBU4xPtV0QHX2p63S");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then((response) => response.json())
  .then((result) => (symbolList = Object.keys(result.symbols)))
  .catch((error) => console.log("error", error));

