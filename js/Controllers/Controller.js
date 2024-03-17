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

  /**
   * Chamando quando o applicativo inicia
   * @param {unknown} data  
   */
  boot(data = null) {}
}
