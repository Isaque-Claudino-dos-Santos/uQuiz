import Controller from "./Controller.js";

export default class TimerController extends Controller {
  $min = document.querySelector("#timer-min");
  $sec = document.querySelector("#timer-sec");

  setTextMin() {
    this.$min.textContent = `${this.app.timer.min}m`;
  }

  setTextSec() {
    this.$sec.textContent = `${this.app.timer.sec}s`;
  }

  boot() {
    this.setTextMin();
    this.setTextSec();

    const intervalID = setInterval(() => {
      const { min, sec } = this.app.timer;

      if (min <= 0) {
        clearInterval(intervalID);
        return;
      }

      if (sec <= 0) {
        this.app.setTimerSec(60);
        this.app.setTimerMin(min - 1);
      } else {
        this.app.setTimerSec(sec - 1);
      }

      this.setTextMin();
      this.setTextSec();
    }, 1000);
  }
}
