document.querySelector("#send").onclick = function (e) {
  e.preventDefault();
  const symbol = document.querySelector("#symbol").value;
  const date = document.querySelector("#date").value;
  const symbolErrors = validateSymbol(symbol);
  const dateErrors = validateDate(date);
  handleErrors(symbolErrors, dateErrors);
  if (!symbolErrors && !dateErrors) {
    removeLoading();
    removeAlldata();
    handlerData(symbol, date);
  }
};
const removeLoading = () => {
  const loading = document.querySelector(".loading");
  loading.classList.remove("hidden");
};

const removeOldSymbols = () => {
  const $list = document.querySelectorAll(".item");
  if ($list)
    $list.forEach(function ($item) {
      $item.remove();
    });
};
function handlerDataSymbols(symbol, date) {
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
    .then((response) => handlerSymbols(response));
}
const handlerSymbols = (response) => {
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
  showLoading()
  symbolsValue = response.rates[symbol];
  const symbolItem = document.createElement("li");
  symbolItem.className = "list-group-item list-group-item-action item";
  symbolItem.textContent = `${symbol}: ${symbolsValue}`;
  document.querySelector("#results").appendChild(symbolItem);
};

const showLoading=()=>{
  const loading = document.querySelector(".loading");
  loading.classList.add("hidden");
}
