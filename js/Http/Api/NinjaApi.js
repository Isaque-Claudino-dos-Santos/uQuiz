import HobbyResource from "../Resources/HobbyResource.js";
import HttpClient from "../Services/HttpClient.js";

export default class NinjaApi extends HttpClient {
  url = "https://api.api-ninjas.com/v1";

  headers = {
    "X-Api-Key": "5Fygv+rV83r/h0XuWK1U3w==AJuWHhoEBeLh1oAk",
  };

  async getHobbie(category) {
    return this.json()
      .path("/hobbies")
      .param("category", category)
      .fetch()
      .then(async (response) => {
        if (response.status === 200)
          return new HobbyResource(await response.json()).get();
      })
      .catch((error) => ({
        success: false,
        error: error,
      }));
  }

  async getRandomWord(type) {
    return this.json()
      .path("/randomword")
      .param("type", type)
      .fetch()
      .then(async (response) => {
        return await response.json().word;
      })
      .catch((error) => ({
        success: false,
        error: error,
      }));
  }
}
