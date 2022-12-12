const db = require('../models/index');
const Op = db.Sequelize.Op;

//npx sequelize-cli model:generate --name storyauthors --attributes storyauthorsName:string,description:text,status:integer,dateUpdated:date,dateCreated:date
//npx sequelize-cli model:generate --name stories --attributes name:string,link:string,description:text,images:text,status:integer,dateCreated:date,dateUpdated:date,storyauthorsId:bigint,storytypesId:bigint


const getPagination = (page, size) => {
  const limit = size ? + size : 5;
  const offset = page ? page * limit : 0;


  return { limit, offset };
};

exports.getAuthor = async (query) => {
    try {

      const { page, size, name } = query;
       var condition =  { storyauthorsName: { [Op.like]: `%${name}%` } }
       const { limit, offset } = getPagination(page, size);

    const mysdy = await db.storyauthors.findAll(
      {
        logging : true,
        limit: limit, 
        offset: offset,
        where : condition,
      }
    )
    return mysdy

    } catch (e) {
      throw Error("Error while Paginating Author");
    }
  };

  exports.newAuthor = async (data) => {
    try {
     
      return await db.storyauthors.create(data)

    } catch (e) {
      console.log("E", e)
      // Log Errors
      throw Error("Error while Paginating Author");
    }
  };
  
exports.updateAuthor = async (id, body) => {
  try {
    const mystic = await db.storyauthors.update(body, {
      where: { id },
    });

    return mystic;
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};


exports.deleteAuthor = async (id, body) => {
    try {
      const mystic = await db.storyauthors.destroy( {
        where: { id },
      });
  
      return mystic;
    } catch (e) {
      // Log Errors
      throw Error("Error while Paginating Author");
    }
  };
