import HttpClient from "../Services/HttpClient.js";
import { TOKEN_XApiKey } from "../constants.js";

export default class HobbiesApi extends HttpClient {
  BASE_URL = "https://api.api-ninjas.com/v1/hobbies";

  HEADERS = {
    "X-Api-Key": TOKEN_XApiKey,
  };

  async getHobbie(category) {
    const hobbie = await this.fetchJson(`?category=${category}`);
    return hobbie;
  }
}
