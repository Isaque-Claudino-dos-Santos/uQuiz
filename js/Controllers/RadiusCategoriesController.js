export default class RadiusCategoriesController {
  /**@type {HTMLInputElement[]} */
  $elements = document.querySelectorAll('[name="category"]');

  constructor() {
    this._setDefaultChecked();
  }

  _setDefaultChecked() {
    const hasChecked = this.$elements
      .keys()
      .some((index) => this.$elements[index].checked === true);

    if (!hasChecked) {
      this.$elements[0].checked = true;
    }
  }

  getChecked() {
    for (const $element of this.$elements) {
      if($element.checked) return $element.value;
    }
    return null;
  }
}
