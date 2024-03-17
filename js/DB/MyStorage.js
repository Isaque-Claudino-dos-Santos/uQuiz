export default class MyStorage {
  constructor(name, data = {}) {
    this.name = name;
    if (this.notExists()) this.set(data);
  }

  exists() {
    return !!localStorage.getItem(this.name);
  }

  notExists() {
    return !this.exists(this.name);
  }

  existsKey(keysPath = "") {
    if (this.notExists(this.name)) return false;

    const data = JSON.parse(localStorage.getItem(this.name));
    let temp = data;

    for (const key of keysPath.split(".")) {
      if (!(key in temp)) return false;
      temp = temp[key];
    }

    return true;
  }

  get(keys = null) {
    if (this.notExists(this.name)) return null;
    const data = JSON.parse(localStorage.getItem(this.name));
    let temp = data;

    if (!keys) return data;

    for (const key of keys.split(".")) {
      if (!(key in temp)) continue;

      temp = temp[key];
    }

    return temp;
  }

  set(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  put(data = null) {
    if (!data)
      throw console.error(new Error(`Data not valid in put Local storage`));
    if (this.notExists(this.name))
      throw console.error(new Error(`Not found localStorage ${this.name}`));

    const prevData = this.get(this.name);
    const mergedData = { ...prevData, ...data };

    localStorage.setItem(this.name, JSON.stringify(mergedData));
  }

  destroy() {
    localStorage.removeItem(this.name);
  }
}
