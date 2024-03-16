import { htmlEncode } from "../../utils.js";

export default class WikiResource {
  title = "";
  describe = "";
  content = "";

  constructor(data) {
    const page = data.pages[0];
    this.title = page?.title;
    this.describe = page?.describe;
    this.content = htmlEncode(page?.excerpt);
  }

  get() {
    return {
      title: this.title,
      describe: this.describe,
      content: this.content,
    };
  }
}
