import Controller from "./Controller.js";
import InputResponseController from "./InputResponseController.js";
import ListAttempController from "./ListAttemptController.js";

export default class ButtonSubmitController extends Controller {
  /**@type {HTMLButtonElement} */
  $element = document.querySelector("#btn-submit");

  /**
   * @param {{listAttemps: ListAttempController, inputResponse: InputResponseController}} data
   */
  boot(data) {
    const { listAttemps, inputResponse } = data;
    //------
    //EVENTS
    //------
    this.$element.addEventListener("click", () => {
      //Add item in list
      this.app.addAttemp();
      listAttemps.addItem(this.app.inputResponseValue);
      //Clear input value
      this.app.inputResponseValue = "";
      this.app.storage.put({ inputResponseValue: "" });
      inputResponse.value("");
    });
  }
}
