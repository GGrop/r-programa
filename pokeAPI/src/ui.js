import { getPokemons, getCompletePokemons } from "./pokeapi.js";

let page = 0;
const $paginator = document.querySelector("#more-pokemons");

const $start = document.querySelector("#start");
const $types = document.querySelectorAll(".nav a");

$start.onclick = () => {
  handleInterface();
  showPokemons();
};

$types.forEach(($element) => {
  $element.addEventListener("click", () => {
    showPokemons($element.dataset.type);
    page = 0;
  });
});
