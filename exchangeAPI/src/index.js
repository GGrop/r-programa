document.querySelector("#send").onclick = function (e) {
  e.preventDefault();
  const symbol = document.querySelector("#symbol").value;
  const date = document.querySelector("#date").value;
  const symbolErrors = validateSymbol(symbol);
  const dateErrors = validateDate(date);
  handleErrors(symbolErrors, dateErrors);
  if (!symbolErrors && !dateErrors) {
    removeLoading();
    removeOldSymbols();
    handleLoading(1);
    getSymbols(symbol, date);
  }
};
const removeLoading = () => {
const handleLoading = (state) => {
  const loading = document.querySelector(".loading");
  if(state){
    loading.classList.remove("hidden");
  }else{
    loading.classList.add("hidden");
  }
};

const removeOldSymbols = () => {
  const $symbols = document.querySelectorAll(".item");
  if ($symbols)
    $symbols.forEach(function ($item) {
      $item.remove();
    });
};
function getSymbols(symbol, date) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "K1wPo186HgThBr8LBU4xPtV0QHX2p63S");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  fetch(
    `https://api.apilayer.com/exchangerates_data/${date}?base=${symbol}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((response) => handleSymbols(response));
}
const handleSymbols = (response) => {
  const symbol = document.querySelector("#symbol").value;
  document.querySelector(
    "#titleResult"
  ).textContent = ` 1 ${symbol.toUpperCase()} equivale a:`;
  const symbolList = Object.keys(response.rates);
  symbolList.forEach((symbol) => {
    makeInterface(symbol, response);
  });
};

const makeInterface = (symbol, response) => {
  handleLoading(0);
  symbolsValue = response.rates[symbol];
  const symbolItem = document.createElement("li");
  symbolItem.className = "list-group-item list-group-item-action item";
  symbolItem.textContent = `${symbol}: ${symbolsValue}`;
  document.querySelector("#results").appendChild(symbolItem);
};
