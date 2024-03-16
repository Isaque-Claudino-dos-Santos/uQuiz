import Controller from "./Controller.js";

export default class TipElementController extends Controller{
  $element = document.querySelector("#tip");

  addTip(text) {
    this.$element.textContent = text;
  }
}
