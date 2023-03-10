let symbols = [];

const myHeaders = new Headers();
myHeaders.append("apikey", "K1wPo186HgThBr8LBU4xPtV0QHX2p63S");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then((response) => response.json())
  .then((result) => (symbols = Object.keys(result.symbols)))
  .catch((error) => console.log("error", error));

const validateSymbol = (symbol) => {
  symbol=symbol.toUpperCase()
  if (!symbols.includes(symbol)) {
    if(symbol === ''){
      return "Este campo es obligatorio para la busqueda, pruebe con USD!"
    }
    return "el simbolo que inserto no existe en nuestra base de datos";
  }
  return "";
};
const validateDate = (date) => {
  if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
    if(date === ''){
      return "Este campo es obligatorio para la busqueda!"
    }
    return "Inserte un formato de fecha valido";
  }
  const inputDate = new Date(date).getTime();
  const actualDate = new Date().getTime();
  const minDate = new Date("1999-01-01").getTime();

  if (inputDate > actualDate) {
    return "No puede ingresar una fecha futura";
  }
  if (inputDate < minDate) {
    return "No tenemos informacion anterior a 1999";
  }
  return "";
};

const handleErrors = (symbolErrors, dateErrors) => {
  removeErrors();
  createErrors(symbolErrors, dateErrors);
};
const removeErrors = () => {
  const $errors = document.querySelectorAll(".error");
  $errors.forEach(($error) => {
    $error.remove();
  });
};
const createErrors = (symbolErrors, dateErrors) => {
  const $divSymbol = document.querySelector("#input-symbol");
  const $divDate = document.querySelector("#input-date");

  $symbolError = document.createElement("p");
  $symbolError.classList.add("error");
  $symbolError.textContent = symbolErrors;

  $dateError = document.createElement("p");
  $dateError.classList.add("error");
  $dateError.textContent = dateErrors;

  $divSymbol.appendChild($symbolError);
  $divDate.appendChild($dateError);
};
