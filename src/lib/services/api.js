export default {
  url: "https://api.nal.usda.gov/ndb/search/",
  apiKey: "M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9",

  async search(foodName) {
    if (foodName.length == 0) return [];
    const req = this.buildRequest(foodName);
    const res = await this.fetch(req);
    return this.process(res);
  },

  buildRequest(foodName) {
    return this.urlify({
      apiKey: this.apiKey,
      query: foodName,
      dataSource: "Standard Reference",
      format: "json",
      max: 10
    });
  },

  urlify(params) {
    return `${this.url}?q=${params.query}&ds=${params.dataSource}&api_key=${
      params.apiKey
    }&max=${params.max}`;
  },

  fetch(request) {
    return window
      .fetch(request, {
        method: "GET",
        headers: new Headers({ Accept: "application/json" })
      })
      .catch(error => {
        throw new Error(error);
      });
  },

  async process(res) {
    const body = await res.json();
    if (body.errors) return [];
    const normalizedResults = body.list.item.map(item => ({
      name: item.name,
      id: item.ndbno
    }));

    return normalizedResults;
  }
};
