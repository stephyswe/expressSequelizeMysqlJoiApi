'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Stories.init({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.TEXT,
    images: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateUpdated: DataTypes.DATE,
    storyauthorsId: DataTypes.BIGINT,
    storytypesId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'stories', //name of table in database
    timestamps: false
  });
  return Stories;
};