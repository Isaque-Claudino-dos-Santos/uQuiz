import Feature from "./Feature.js";

export default class QuizFeatures extends Feature {
  async attempResponse() {
    const { listAttemps, inputResponse, statistics } = this.data;

    const value = this.app.inputResponseValue;

    if (!value || value === "") return;

    console.log(this.app.hobby);

    if (this.app.hobby === value) {
      alert("Sua resposta está correta");
      this.app.setTotalCorrectResponse(this.app.totalCorrectResponse + 1);
      statistics.setTextTotalCorrectResoponse();
      await this.addTipAfterRequestDataQuiz();
    }

    //Add item in list
    this.app.addAttemp();
    listAttemps.addItem(value);

    //Clear input value
    inputResponse.clearValue("");

    //render statistics
    statistics.setTextTotalAttemp();
  }

  async addTipAfterRequestDataQuiz() {
    const { tip } = this.data;
    tip.skeleton();
    await this.app.requestDataQuiz();
    tip.loaded();
  }
}
