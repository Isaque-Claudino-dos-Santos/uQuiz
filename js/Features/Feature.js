import App from "../App.js";

/**
 * @abstract
 */
export default class Feature {
  /**
   * @type {App}
   */
  app;

  /**
   * @param {App} app
   * @param {object} data
   */
  constructor(app, data = {}) {
    /**
     * @type {App}
     */
    this.app = app;
    this.data = data;
  }
}
