import ButtonSkipController from "./Controllers/ButtonSkipController.js";
import ButtonSubmitController from "./Controllers/ButtonSubmitController.js";
import InputResponseController from "./Controllers/InputResponseController.js";
import ListAttempController from "./Controllers/ListAttemptController.js";
import RadiusCategoriesController from "./Controllers/RadiusCategoriesController.js";
import TipElementController from "./Controllers/TipElementController.js";
import App from "./App.js";

const app = new App();

const listAttemps = new ListAttempController(app);
const inputResponse = new InputResponseController(app);

listAttemps.boot();
inputResponse.boot();

new ButtonSkipController(app).boot();
new TipElementController(app).boot();
new RadiusCategoriesController(app).boot();
new ButtonSubmitController(app).boot({ listAttemps, inputResponse });

console.log(app);
