'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storychapters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  storychapters.init({
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateUpdated: DataTypes.DATE,
    storiesId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'storychapters',
    timestamps: false
  });
  return storychapters;
};