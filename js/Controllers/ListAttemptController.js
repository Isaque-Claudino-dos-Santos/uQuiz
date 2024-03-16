export default class ListAttempController {
  /**@type {HTMLUListElement} */
  $element = document.querySelector("#attempt");

  createItem(text) {
    const $li = document.createElement("li");
    $li.textContent = text;
    this.$element.appendChild($li);
    return;
  }
}
