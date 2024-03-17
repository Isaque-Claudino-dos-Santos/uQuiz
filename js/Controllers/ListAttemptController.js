import Controller from "./Controller.js";

export default class ListAttempController extends Controller {
  /**@type {HTMLUListElement} */
  $element = document.querySelector("#attempt");
  $btnClear = document.querySelector("#attempt-clear");

  addItem(text) {
    const $li = document.createElement("li");
    $li.textContent = text;
    this.$element.appendChild($li);
  }

  removeAllItems() {
    new Array(...this.$element.childNodes).forEach(($li) => $li.remove());
    this.app.storage.put({ attemps: [] });
  }

  boot() {
    this.$btnClear.addEventListener("click", () => {
      this.removeAllItems();
    });

    //------
    //LOAD LOCAL STORAGE
    //------
    const attemps = this.app.storage.get("attemps");
    attemps.forEach((attemp) => this.addItem(attemp));
    this.app.attemps = attemps;
  }
}
