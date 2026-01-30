import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = groceryItems;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}
render();