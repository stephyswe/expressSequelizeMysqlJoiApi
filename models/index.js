'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log("path",__dirname, file)
    
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// One-To-Many

// db.storyauthors.belongsTo(db.storytypes)
// db.stories.belongsTo(db.storytypes, {foreignKey: 'id' , as: 'storytypes' });

// db.storytypes.hasMany(db.stories)


// stories belongsTo storytypes
// => db.stories.belongsTo(db.storytypes, {foreignKey: 'storytypesId' , as: 'storytypes' });
// db.stories.hashMany(db.storyauthors)

// db.stories.belongsToMany(db.storytypes, { through: 'stories_types' });


//lấy  thông tin truyện thì phải lấy kèm theo tên tác giả , thể ,loại ok

//mot truyen co 1 tac gia
db.storyauthors.hasMany(db.stories, {foreignKey: 'id' , as: 'stories' });
db.stories.belongsTo(db.storyauthors, {foreignKey: 'id' , as: 'storyauthors' });

//mot truyen có 1 thẻ loai
db.storytypes.hasMany(db.stories, {foreignKey: 'storytypesId' , as: 'stories' });
db.stories.belongsTo(db.storytypes, {foreignKey: 'storytypesId' , as: 'storytypes' });


// lấy thông tin chương thì phải lấy thông tin truyện //ok
db.stories.hasMany(db.storychapters, {foreignKey: 'storiesId' , as: 'storychapters' });
db.storychapters.belongsTo(db.stories, {foreignKey: 'storiesId' , as: 'stories' });

//db.stories.belongsToMany(db.storytypes, { through: db.storytypes }); 


module.exports = db;
