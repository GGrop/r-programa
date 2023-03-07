document.querySelector("#send").onclick = function (e) {
  e.preventDefault();
  const symbol = document.querySelector("#symbol").value;
  const date = document.querySelector("#date").value;
  const symbolErrors = validateSymbol(symbol);
  const dateErrors = validateDate(date);
  handleErrors(symbolErrors, dateErrors);
  if (!symbolErrors && !dateErrors) {
    loading();
    removeAlldata();
    handlerData(symbol, date);
  }
};
const loading = () => {
