const CurrentsAPI = require("currentsapi");
const currentsapi = new CurrentsAPI(process.env.CURRENTS_API_KEY);

class CurrentsAPIControllers {
  static search(req, res, next) {
    const {
      language,
      keywords,
      country,
      category,
      start_date,
      end_date,
    } = req.body;
    currentsapi
      .search({
        language: language,
        keywords: keywords,
        country: country,
        category: category,
        start_date: start_date,
        end_date: end_date,
      })
      .then((response) => {
        if (response.status === "ok") {
          res.status(200).json(response.news);
        }
      });
  }
}

module.exports = CurrentsAPIControllers;
