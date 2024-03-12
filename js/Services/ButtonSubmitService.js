export default class ButtonSubmitService {
  _buttonElement = document.querySelector("#btn-submit");

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  onClick(callback) {
    this._buttonElement.addEventListener("mouseup", (event) => callback(event));
  }
}
