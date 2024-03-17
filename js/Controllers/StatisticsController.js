import Controller from "./Controller.js";

export default class StatisticsController extends Controller {
  /**@type {HTMLDivElement} */
  $element = document.querySelector("#statistics");

  $totalSkip = document.createElement("li");
  $totalAttemp = document.createElement("li");

  setTextTotalSkip() {
    this.$totalSkip.innerHTML = `<span>Total de pulos:</span> ${this.app.totalSkips}`;
  }

  setTextTotalAttemp() {
    this.$totalAttemp.innerHTML = `<span>Total de tentativas:</span> ${this.app.attemps.length}`;
  }

  boot() {
    this.$element.appendChild(this.$totalSkip);
    this.setTextTotalSkip();

    this.$element.appendChild(this.$totalAttemp);
    this.setTextTotalAttemp();
  }
}
