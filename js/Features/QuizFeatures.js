import Feature from "./Feature.js";

export default class QuizFeatures extends Feature {
  attempResponse() {
    const { listAttemps, inputResponse } = this.data;

    //Add item in list
    this.app.addAttemp();
    listAttemps.addItem(this.app.inputResponseValue);

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
