export default class HobbyResource {
  constructor(data) {
    const { hobby, link, category } = data;
    this.name = hobby;
    this.link = link;
    this.category = category;
  }

  get() {
    return {
      hobby: this.name,
      link: this.link,
      category: this.category,
    };
  }
}
