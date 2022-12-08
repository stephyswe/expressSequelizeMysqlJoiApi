'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storytypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  storytypes.init({
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    dateUpdated: DataTypes.DATE,
    storyTypescol: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'storytypes',
    timestamps: false
  });
  return storytypes;
};