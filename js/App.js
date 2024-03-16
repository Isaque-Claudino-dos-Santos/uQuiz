import Storage from "./DB/storage.js";

export default class App {
  storage = new Storage("quiz_app_storage", {
    inputResponseValue: "",
    started: false,
    category: "general",
    attemps: [],
  });

  inputResponseValue = "";
  started = false;
  category = "general";
  attemps = [];

  setInputResponseValue(value) {
    this.inputResponseValue = value;
    this.storage.put({ inputResponseValue: value });
  }

  setCategory(value) {
    this.category = value;
    this.storage.put({ category: value });
  }

  addAttemp() {
    const value = this.inputResponseValue
    this.storage.put({ attemps: [...this.attemps, value] });
    this.attemps = this.attemps.concat(value);
  }
}
