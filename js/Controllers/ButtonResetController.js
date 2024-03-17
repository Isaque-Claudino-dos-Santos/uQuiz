import Controller from "./Controller.js";

export default class ButtonResetController extends Controller {
  /**@type {HTMLButtonElement} */
  $element = document.querySelector("#btn-reset");

  boot() {
    this.$element.addEventListener("click", () => {
      this.app.storage.destroy()
      location.reload()
    });
  }
}
