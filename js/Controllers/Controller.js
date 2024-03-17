import App from "../App.js";

/**
 * @abstract
 */
export default class Controller {
  /**
   * @param {App} app
   */
  app;

  /**
   * @param {App} app
   */
  constructor(app) {
    /**
     * @param {App} app
     */
    this.app = app;
  }

  skeleton() {}

  loaded() {}

  boot(data = null) {}
}
