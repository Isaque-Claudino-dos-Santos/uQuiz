import App from "./App.js";

const app = new App();

window.addEventListener("load", async () => {
  await app.startQuiz();
});

app.buttonSubmit.$element.addEventListener("click", async () => {
  await app.HandlerButtonSubmit();
});

app.buttonSkip.$element.addEventListener("click", async () => {
  await app.restartQuiz();
});
