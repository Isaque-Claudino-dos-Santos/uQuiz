import Storage from "./DB/storage.js";
import api from "./Http/Api/index.js";

export default class App {
  storage = new Storage("quiz_app_storage", {
    inputResponseValue: "",
    started: false,
    category: "general",
    attemps: [],
    hobby: null,
    describe: null,
    totalSkips: 0,
  });

  inputResponseValue = "";
  started = false;
  category = "general";
  attemps = [];
  hobby = null;
  describe = null;
  loading = false;
  totalSkips = 0;

  constructor() {
    Object.assign(this, this.storage.get());
  }

  setInputResponseValue(value) {
    this.inputResponseValue = value;
    this.storage.put({ inputResponseValue: value });
  }

  setCategory(value) {
    this.category = value;
    this.storage.put({ category: value });
  }

  setTotalSkip(value) {
    this.totalSkips = value;
    this.storage.put({ totalSkips: value });
  }

  async requestDataQuiz() {
    this.loading = true;

    const hobby = await api.ninja.getHobbie(this.category);
    const wiki = await api.wiki.searchWiki(hobby.name);
    const describe = wiki.content ?? wiki.describe;

    this.storage.put({
      hobby: hobby.name,
      describe,
      started: true,
    });

    this.hobby = hobby.name;
    this.describe = describe;
    this.started = true;

    this.loading = false;
  }

  addAttemp() {
    const value = this.inputResponseValue;
    this.storage.put({ attemps: [...this.attemps, value] });
    this.attemps = this.attemps.concat(value);
  }
}
