import Controller from "./Controller.js";
export default class RadiusCategoriesController extends Controller {
  /**@type {HTMLInputElement[]} */
  $elements = document.querySelectorAll('[name="category"]');

  getChecked() {
    for (const $element of this.$elements) {
      if ($element.checked) return $element.value;
    }
    return null;
  }

  boot() {
    //--------
    // EVENTS
    //--------
    this.$elements.forEach(($element) => {
      $element.addEventListener("click", () => {
        if (!$element.checked) return;
        const category = $element.value;
        this.app.setCategory(category);
      });
    });

    //-------------------
    // LOAD LOCAL STORAGE
    //-------------------
    const category = this.app.storage.get("category");
    
    this.app.category = category

    for (const $element of this.$elements) {
      if ($element.value !== category) continue;

      $element.checked = true;
      break;
    }
  }
}
