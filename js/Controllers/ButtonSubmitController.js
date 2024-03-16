import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";
import InputResponseController from "./InputResponseController.js";
import ListAttempController from "./ListAttemptController.js";

export default class ButtonSubmitController extends Controller {
  /**@type {HTMLButtonElement} */
  $element = document.querySelector("#btn-submit");

  /**
   * @param {{quizFeatures: QuizFeatures}} data
   */
  boot(data) {
    const { quizFeatures } = data;

    //------
    //EVENTS
    //------
    this.$element.addEventListener("click", () => {
      quizFeatures.attempResponse();
    });
  }
}
