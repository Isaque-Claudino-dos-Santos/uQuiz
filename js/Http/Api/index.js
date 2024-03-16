import NinjaApi from "./NinjaApi.js";
import WikiApi from "./WikiApi.js";

const api = {
  ninja: new NinjaApi(),
  wiki: new WikiApi(),
};

export default api;
