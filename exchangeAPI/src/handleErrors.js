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

const validateSymbol = (symbol) => {
  if (!symbolList.includes(symbol.toUpperCase())) {
    if(symbol === ''){
      return "Este campo es obligatorio para la busqueda, pruebe con USD!"
    }
    return "el simbolo que inserto no existe en nuestra base de datos";
  }
  return "";
};
