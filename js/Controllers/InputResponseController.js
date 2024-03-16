import Controller from "./Controller.js";

export default class InputResponseController extends Controller {
  /**@type {HTMLInputElement} */
  $element = document.querySelector("#response");

  value(data = null) {
    if (data === null) return this.$element.value;
    this.$element.value = data;
  }

  boot() {
    //---------
    // EVENTS
    //---------
    this.$element.addEventListener("keyup", () => {
      this.app.setInputResponseValue(this.value());
    });

    //-------------------
    // LOAD LOCAL STORAGE
    //-------------------
    this.$element.value = this.app.storage.get("inputResponseValue");
    this.app.inputResponseValue = this.value();
  }
}
