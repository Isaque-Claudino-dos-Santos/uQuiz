import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";

export default class InputResponseController extends Controller {
  /**@type {HTMLInputElement} */
  $element = document.querySelector("#response");
  $icon = document.querySelector(".input-search .icon");

  value(data = null) {
    if (data === null) return this.$element.value;
    this.$element.value = data;
  }

  clearValue() {
    this.app.inputResponseValue = "";
    this.app.storage.put({ inputResponseValue: "" });
    this.value("");
  }

  /**
   *
   * @param {{quizFeatures: QuizFeatures}} data
   */
  boot(data) {
    const { quizFeatures } = data;
    //---------
    // EVENTS
    //---------
    this.$element.addEventListener("keyup", () => {
      this.app.setInputResponseValue(this.value());
    });

    this.$element.addEventListener("keypress", (event) => {
      const { code } = event;

      if (code === "Enter") {
        quizFeatures.attempResponse();
      }
    });

    this.$icon.addEventListener("click", () => {
      quizFeatures.attempResponse();
    });

    //-------------------
    // LOAD LOCAL STORAGE
    //-------------------
    this.$element.value = this.app.storage.get("inputResponseValue");
    this.app.inputResponseValue = this.value();
  }
}
