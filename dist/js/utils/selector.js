export const select = (el) => {
  const element = document.querySelector(el);

  if (element) return element;

  throw Error("Selector don't match any type.");
}

export const selectAll = (el) => {
  const elements = document.querySelectorAll(el);

  if (elements.length) return elements;

  throw Error("Selector don't match any type");
}