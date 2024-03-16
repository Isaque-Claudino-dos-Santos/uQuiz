export default class TipElementController {
  $element = document.querySelector("#tip");

  addTip(text) {
    this.$element.textContent = text;
  }
}
