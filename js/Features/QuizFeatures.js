import Feature from "./Feature.js";

export default class QuizFeatures extends Feature {
  attempResponse() {
    const { listAttemps, inputResponse } = this.data;

    const value = this.app.inputResponseValue;

    if (!value || value === "") return;

    //Add item in list
    this.app.addAttemp();
    listAttemps.addItem(value);

    //Clear input value
    inputResponse.clearValue("");
  }

  async addTipAfterRequestDataQuiz() {
    const { tip } = this.data;
    tip.skeleton();
    await this.app.requestDataQuiz();
    tip.loaded();
  }
}
