"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("Watchlists", "title", { type: Sequelize.STRING });

    queryInterface.addColumn("Watchlists", "poster", { type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Watchlists", "title", {});

    queryInterface.removeColumn("Watchlists", "poster", {});
  },
};
