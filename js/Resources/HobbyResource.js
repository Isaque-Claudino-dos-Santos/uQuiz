export default class HobbyResource {
  name = "";
  link = "";
  category = "";

  save(data) {
    const { hobby, link, category } = data;
    this.name = hobby;
    this.link = link;
    this.category = category;
  }
}
