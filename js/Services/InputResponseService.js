export default class InputResponseService {
  _inputElement = document.querySelector("#response");

  constructor() {
    this.handleEventPress = this.handleEventPress.bind(this);
  }

  handleEventPress(handlers = { onEnter: () => {} }) {
    this._inputElement.addEventListener("press", (event) => {
      const { code } = event;

      if (code === "Enter") return handlers.onEnter();
    });
  }

  value() {
    return this._inputElement.value;
  }
}
