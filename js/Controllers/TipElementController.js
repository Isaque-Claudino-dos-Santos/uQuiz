import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";

export default class TipElementController extends Controller {
  $element = document.querySelector("#tip");

  loaded() {
    this.$element.textContent = this.app.describe;
  }

  skeleton() {
    this.$element.textContent = "loading ...";
  }

  /**
   *
   * @param {{quizFeatures: QuizFeatures}} data
   */
  async boot(data) {
    const { quizFeatures } = data;
    if (this.app.started) {
      this.loaded();
    } else {
      quizFeatures.addTipAfterRequestDataQuiz();
    }
  }
}
