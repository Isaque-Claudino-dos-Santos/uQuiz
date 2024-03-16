import api from "../Http/Api/index.js";
import HobbyResource from "../Resources/HobbyResource.js";
import WikiResource from "../Resources/WikiResource.js";

export default class QuizController {
  started = false;
  correctResponse = null;
  hobby = new HobbyResource();
  wiki = new WikiResource();

  async _requestHobby(category) {
    const request = await api.ninja.getHobbie(category);

    if (request.status !== 200) return;

    this.hobby.save(await request.json());
  }

  async _requestWiki() {
    const request = await api.wiki.searchWiki(this.hobby.name);

    if (request.status !== 200) return;

    this.wiki.save(await request.json());
  }

  async start(category) {
    if (this.started) return;

    await this._requestHobby(category);
    await this._requestWiki();

    this.correctResponse = this.wiki.title.trim().toLocaleLowerCase();
  }

  async restart(category) {
    this.started = false;
    await this.start(category);
  }

  isCorrectResponse(attempResponse = "") {
    return attempResponse.trim().toLocaleLowerCase() === this.correctResponse;
  }
}
