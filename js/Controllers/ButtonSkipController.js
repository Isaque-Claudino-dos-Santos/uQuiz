import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";
import StatisticsController from "./StatisticsController.js";

export default class ButtonSkipController extends Controller {
  /**@type {HTMLButtonElement} */
  $element = document.querySelector("#btn-skip");

  /**
   *
   * @param {{quizFeatures: QuizFeatures,statistics: StatisticsController}} data
   */
  async boot(data) {
    const { quizFeatures, statistics } = data;

    this.$element.addEventListener("click", async () => {
      if (this.app.loading) return;

      await quizFeatures.addTipAfterRequestDataQuiz();
      this.app.setTotalSkip(this.app.totalSkips + 1);
      statistics.setTextTotalSkip();
    });
  }
}
