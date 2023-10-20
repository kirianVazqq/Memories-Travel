module.exports = (sequelize, Sequelize) => {
  const Memory = sequelize.define("Memory", {
    place: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
    description: {
      type: Sequelize.TEXT,
    },
    // DECOMMENT:
    filename: {
      type: Sequelize.STRING,
    },
  });

  return Memory;
};
