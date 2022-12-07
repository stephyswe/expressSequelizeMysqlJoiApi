const db = require('../models/index');

//npx sequelize-cli model:generate --name storyauthors --attributes storyauthorsName:string,description:text,status:integer,dateUpdated:date,dateCreated:date
//npx sequelize-cli model:generate --name stories --attributes name:string,link:string,description:text,images:text,status:integer,dateCreated:date,dateUpdated:date,storyauthorsId:bigint,storytypesId:bigint
//npx sequelize-cli model:generate --name storychapters --attributes name:string,number:integer,content:text,status:integer,dateCreated:date,dateUpdated:date,storiesId:bigint


exports.getChapters = async (data) => {
    try {

    const mysdy = await db.storychapters.findAll()
  
    return mysdy

    } catch (e) {
      throw Error("Error while Paginating Chapters");
    }
  };

  exports.newChapters = async (data) => {
    try {
   
      return await db.storychapters.create(data)

    } catch (e) {
      console.log("E", e)
      // Log Errors
      throw Error("Error while Paginating Chapters");
    }
  };
  

exports.updateChapters = async (id, body) => {
  try {
    const mystic = await db.storychapters.update(body, {
      where: { id },
    });

    return mystic;
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};


exports.deleteChapters = async (id, body) => {
    try {
      const mystic = await db.storychapters.destroy( {
        where: { id },
      });
  
      return mystic;
    } catch (e) {
      // Log Errors
      throw Error("Error while Paginating Chapters");
    }
  };