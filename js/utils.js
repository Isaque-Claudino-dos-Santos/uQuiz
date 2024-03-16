export function htmlEncode(value) {
  const $element = document.createElement("p");
  $element.innerHTML = value;
  return $element.textContent;

}
