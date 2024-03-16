export default class InputResponseController {
  /**@type {HTMLInputElement} */
  $element = document.querySelector("#response");

  getValue() {
    return this.$element.value || ''
  }
}
