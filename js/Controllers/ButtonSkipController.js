import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";

export default class ButtonSkipController extends Controller {
  /**@type {HTMLButtonElement} */
  $element = document.querySelector("#btn-skip");

  /**
   *
   * @param {{quizFeatures: QuizFeatures}} data
   */
  async boot(data) {
    const { quizFeatures } = data;

    this.$element.addEventListener("click", async () => {
      if (this.app.loading) return;

      await quizFeatures.addTipAfterRequestDataQuiz();
      this.app.setTotalSkip(this.app.totalSkips + 1);
    });
  }
}
