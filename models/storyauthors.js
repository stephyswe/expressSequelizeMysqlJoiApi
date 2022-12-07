'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storyauthors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  storyauthors.init({
    storyauthorsName: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    dateUpdated: DataTypes.DATE,
    dateCreated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'storyauthors',
    timestamps: false
  });
  return storyauthors;
};