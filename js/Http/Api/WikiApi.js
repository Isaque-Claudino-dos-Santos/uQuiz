import WikiResource from "../Resources/WikiResource.js";
import HttpClient from "../Services/HttpClient.js";

export default class WikiApi extends HttpClient {
  url = "https://pt.wikipedia.org/w/rest.php/v1/search/page";

  async searchWiki(search) {
    return this.json()
      .param("limit", "1")
      .param("q", search)
      .fetch()
      .then(async (response) => {
        if (response.status === 200)
          return new WikiResource(await response.json()).get();
      })
      .catch((error) => ({
        success: false,
        error: error,
      }));
  }
}
