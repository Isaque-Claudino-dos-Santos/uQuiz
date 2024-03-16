export default class HobbyResource {
  success = true;

  constructor(data) {
    const { hobby, link, category } = data;
    this.name = hobby;
    this.link = link;
    this.category = category;
  }

  get() {
    return {
      name: this.name,
      link: this.link,
      category: this.category,
    };
  }
}
