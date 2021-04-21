const fetch = require("node-fetch");

module.exports = function kawalCorona() {
  return fetch("https://api.kawalcorona.com/indonesia", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      else throw response;
    })
    .then((data) => data)
    .catch((err) => err.json().then((body) => body));
};
