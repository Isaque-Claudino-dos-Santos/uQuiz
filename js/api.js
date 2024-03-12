const api = {};

api.category = {
  url: (category) =>
    `https://api.api-ninjas.com/v1/hobbies?category=${category}`,
  response: { hobby: "", link: "", category: "" },
};

api.wiki = {
  url: (search) =>
    `https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${search}`,
  response: {
    batchcomplete: "",
    continue: { sroffset: 0, continue: "" },
    query: {
      searchinfo: { totalhits: 0 },
      search: [
        {
          ns: 0,
          title: "",
          pageid: 0,
          size: 0,
          wordcount: 0,
          snippet: "",
          timestamp: "",
        },
      ],
    },
  },
};

export default api;
