import App from "./App.js";

import QuizFeatures from "./Features/QuizFeatures.js";

import ButtonSkipController from "./Controllers/ButtonSkipController.js";
import ButtonSubmitController from "./Controllers/ButtonSubmitController.js";
import InputResponseController from "./Controllers/InputResponseController.js";
import ListAttempController from "./Controllers/ListAttemptController.js";
import RadiusCategoriesController from "./Controllers/RadiusCategoriesController.js";
import TipElementController from "./Controllers/TipElementController.js";
import ButtonResetController from "./Controllers/ButtonResetController.js";
import StatisticsController from "./Controllers/StatisticsController.js";

const app = new App();

//------------
// INSTANCES CONTROLLERS
//------------
const listAttemps = new ListAttempController(app);
const inputResponse = new InputResponseController(app);
const buttonSkip = new ButtonSkipController(app);
const tip = new TipElementController(app);
const radiusCategories = new RadiusCategoriesController(app);
const buttonSubmit = new ButtonSubmitController(app);
const buttonReset = new ButtonResetController(app);
const statistics = new StatisticsController(app);
//------------
// INSTANCES FEATURES
//------------
const quizFeatures = new QuizFeatures(app, {
  listAttemps,
  inputResponse,
  tip,
  statistics,
});

//------------
// BOOT CONTROLLERS
//------------
listAttemps.boot();
tip.boot({ quizFeatures });
buttonSkip.boot({ quizFeatures, statistics });
buttonSubmit.boot({ quizFeatures });
inputResponse.boot({ quizFeatures });
radiusCategories.boot({ quizFeatures, statistics });
buttonReset.boot();
statistics.boot();
