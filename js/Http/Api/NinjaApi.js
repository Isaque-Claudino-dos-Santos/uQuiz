import HobbyResource from "../Resources/HobbyResource.js";
import HttpClient from "../Services/HttpClient.js";

export default class NinjaApi extends HttpClient {
  url = "https://api.api-ninjas.com/v1";

  headers = {
    "X-Api-Key": "5Fygv+rV83r/h0XuWK1U3w==AJuWHhoEBeLh1oAk",
  };

  async getHobbie(category) {
    const request = await this.json()
      .path("/hobbies")
      .param("category", category)
      .fetch();

    if (request.status === 200)
      return HobbyResource(await request.json()).get();

    return {
      success: false,
      error: await request.json(),
    };
  }

  async getRandomWord(type) {
    const request = await this.json()
      .path("/randomword")
      .param("type", type)
      .fetch();

    if (request.status === 200) return await request.json().word;

    return {
      success: false,
      error: await request.json(),
    };
  }
}
