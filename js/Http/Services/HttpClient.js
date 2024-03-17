export default class HttpClient {
  constructor(method = "GET", url) {
    this.method = method.toLocaleUpperCase();
    this.headers = {};
    this.mode = "cors";
    this.body = null;
    this.url = url;
    this._totalParams = 0;
    this._origin = null;
  }

  get(url = null) {
    const httpClient = new HttpClient("GET", url || this.url);
    Object.assign(httpClient, { ...this });
    return httpClient;
  }

  post(url = null) {
    const httpClient = new HttpClient("POST", url || this.url);
    Object.assign(httpClient, { ...this });
    return httpClient;
  }

  json(method = "GET", url = null) {
    const httpClient = new HttpClient(method, url || this.url);
    httpClient.header("Content-Type", "application/json");
    Object.assign(httpClient, { ...this });
    return httpClient;
  }

  path(locate) {
    this.url += locate;
    return this;
  }

  header(key, value) {
    this.headers[key] = value;
    return this;
  }

  data(data) {
    this.body = data;
    return this;
  }

  parse(key, value) {
    this.url = this.url.replace(
      new RegExp(`${key}`, "g"),
      encodeURIComponent(value)
    );
    return this;
  }
  param(key, value) {
    if (this._totalParams === 0) this.url += "?";
    else this.url += "&";
    this.url += `${key}=${value}`;
    this._totalParams++;
    return this;
  }

  md(mode) {
    this.mode = mode;
    return this;
  }

  origin(url) {
    this._origin = url;
    return this;
  }

  fetch() {
    return fetch(this.url, {
      headers: this.headers,
      method: this.method,
      body: this.body,
      mode: this.mode,
      origin: this._origin,
    });
  }
}
