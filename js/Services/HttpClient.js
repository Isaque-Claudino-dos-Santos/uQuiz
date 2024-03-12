export default class HttpClient {
  BASE_URL = "";
  HEADERS = {};

  constructor() {
    this.fetchJson = this.fetchJson.bind(this);
  }

  async fetchJson(uri) {
    return fetch(this.BASE_URL + uri, {
      headers: {
        "Content-Type": "application-json",
        ...this.HEADERS,
      },
      method: "GET",
    }).then((res) => res.json());
  }
}
