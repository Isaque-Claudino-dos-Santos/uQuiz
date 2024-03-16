import Controller from "./Controller.js";

export default class ListAttempController extends Controller {
  /**@type {HTMLUListElement} */
  $element = document.querySelector("#attempt");

  addItem(text) {
    const $li = document.createElement("li");
    $li.textContent = text;
    this.$element.appendChild($li);
    return;
  }

  boot(data) {
    //------
    //LOAD LOCAL STORAGE
    //------
    const attemps = this.app.storage.get("attemps");
    attemps.forEach((attemp) => this.addItem(attemp));
    this.app.attemps = attemps;
  }
}
