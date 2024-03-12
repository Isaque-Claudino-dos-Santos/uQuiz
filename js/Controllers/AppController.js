import HobbiesApi from "../Api/HobbiesApi.js";
import ButtonSubmitService from "../Services/ButtonSubmitService.js";
import InputResponseService from "../Services/InputResponseService.js";

export default class AppController {
  _inputResponse = new InputResponseService();
  _buttonSubmit = new ButtonSubmitService();
  _hobbiesApi = new HobbiesApi();

  attemptResponse = null;
  correctResonse = null;
  selectedCategory = null;
  attempts = [];
  tips = [];

  constructor() {
    this.boot = this.boot.bind(this);
  }

  async openQuestion() {
    const hobbie = await this._hobbiesApi.getHobbie("general");

    console.log(hobbie);
  }

  onSubmit() {
    this.openQuestion()
  }

  boot() {
    this._buttonSubmit.onClick(() => this.onSubmit());
  }
}
