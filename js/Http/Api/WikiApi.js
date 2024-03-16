import HttpClient from "../Services/HttpClient.js";

export default class WikiApi extends HttpClient {
  url = "https://pt.wikipedia.org/w/rest.php/v1/search/page";

  async searchWiki(search) {
    return await this.json().param("limit", "1").param("q", search).fetch();
  }
}
