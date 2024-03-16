import QuizFeatures from "../Features/QuizFeatures.js";
import Controller from "./Controller.js";
import TipElementController from "./TipElementController.js";
export default class RadiusCategoriesController extends Controller {
  /**@type {HTMLInputElement[]} */
  $elements = document.querySelectorAll('[name="category"]');

  getChecked() {
    for (const $element of this.$elements) {
      if ($element.checked) return $element.value;
    }
    return null;
  }

  toMarkCategory(category) {
    for (const $element of this.$elements) {
      if ($element.value !== category) continue;

      $element.checked = true;
      break;
    }
  }

  value($element) {
    if (!$element.checked) return null;
    return $element.value;
  }

  /**
   *
   * @param {{quizFeatures: QuizFeatures}} data
   */
  async boot(data) {
    const { quizFeatures } = data;
    //--------
    // EVENTS
    //--------
    this.$elements.forEach(($element) => {
      $element.addEventListener("click", async () => {
        if (this.app.loading) return;

        const category = this.value($element);
        this.app.setCategory(category);

        await quizFeatures.addTipAfterRequestDataQuiz();
        this.app.setTotalSkip(this.app.totalSkips + 1);
      });
    });

    //-------------------
    // LOAD LOCAL STORAGE
    //-------------------
    const category = this.app.storage.get("category");
    this.app.category = category;

    this.toMarkCategory(category);
  }
}
