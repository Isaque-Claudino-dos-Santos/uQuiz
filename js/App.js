import ButtonSkipController from "./Controllers/ButtonSkipController.js";
import ButtonSubmitController from "./Controllers/ButtonSubmitController.js";
import InputResponseController from "./Controllers/InputResopnseController.js";
import ListAttempController from "./Controllers/ListAttemptController.js";
import QuizController from "./Controllers/QuizController.js";
import RadiusCategoriesController from "./Controllers/RadiusCategoriesController.js";
import TipElementController from "./Controllers/TipElementController.js";

export default class App {
  quiz = new QuizController();
  inputResponse = new InputResponseController();
  buttonSubmit = new ButtonSubmitController();
  buttonSkip = new ButtonSkipController();
  listAttempt = new ListAttempController();
  tip = new TipElementController();
  inputRadiusCategorys = new RadiusCategoriesController();

  async startQuiz() {
    const category = this.inputRadiusCategorys.getChecked() ?? "general";
    await this.quiz.start(category);

    this.tip.addTip(this.quiz.wiki.content);
  }

  async restartQuiz() {
    const category = this.inputRadiusCategorys.getChecked() ?? "general";
    await this.quiz.restart(category);

    this.tip.addTip(this.quiz.wiki.content);
  }

  async HandlerButtonSubmit() {
    const attempResponse = this.inputResponse.getValue();

    const isCorrectResponse = this.quiz.isCorrectResponse(attempResponse);

    this.listAttempt.createItem(attempResponse);

    if (isCorrectResponse) {
      alert("você acertou");
    }
  }
}
