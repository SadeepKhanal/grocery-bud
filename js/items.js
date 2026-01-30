import { createSingleItem } from "./single-item.js";

export function createItems(itemsArray) {
  const container = document.createElement("div");
  container.className = "items";

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item);
    container.appendChild(itemElement);
  });

  return container;
}