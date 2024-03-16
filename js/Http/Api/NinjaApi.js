import HttpClient from "../Services/HttpClient.js";

export default class NinjaApi extends HttpClient {
  url = "https://api.api-ninjas.com/v1";

  headers = {
    "X-Api-Key": "5Fygv+rV83r/h0XuWK1U3w==AJuWHhoEBeLh1oAk",
  };

  async getHobbie(category) {
    return await this.json()
      .path("/hobbies")
      .param("category", category)
      .fetch();
  }

  async getRandomWord(type) {
    return await this.json().path("/randomword").param("type", type).fetch();
  }
}
