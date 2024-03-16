import { htmlEncode } from "../utils.js";

export default class WikiResource {
  title = "";
  describe = "";
  content = "";

  save(data) {
    const page = data.pages[0];
    this.title = page?.title;
    this.describe = page?.describe;
    this.content = htmlEncode(page?.excerpt);
  }
}
