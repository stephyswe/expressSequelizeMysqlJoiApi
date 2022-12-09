const db = require('../models/index');

//npx sequelize-cli model:generate --name stories --attributes name:string,link:string,description:text,images:text,status:integer,dateCreated:date,dateUpdated:date,storyauthorsId:bigint,storytypesId:bigint
exports.getStories = async (id,body) => {
  try {

    //get One-To-Many relationships

    const mysdy = await db.stories.findAll({
       logging : true,
        include: [
          {
            model: db.storyauthors,
            as: 'storyauthors',
            attributes: ['storyauthorsName']
           

            // attributes:['storyauthorsName',] //chỉ lấy một trường trong bảng
        },
        {
          model: db.storytypes,
          as: 'storytypes',
          attributes:['name']
      }
      ],
        // where: { id: id}
    })
  
  // const mysdy = await db.stories.findAll(  {
  //   logging:true,
  //   offset:0,
  //   limit :2
  // })

  return mysdy

  } catch (e) {
    console.log("get stories", e);
    throw Error("Error while Paginating Stories");
  }
};


  exports.newStories = async (data) => {
    try {
     
      const createNow = await db.stories.create({
          // id: data.id, xoá để tăng id tự động
          name: data.name,
          link: data.link,
          description: data.description,
          images: data.images,
          status: data.status,
          dateCreated: data.dateCreated,
          dateUpdated: data.dateUpdated,
          storyauthorsId: data.storyauthorsId,
          storytypesId: data.storytypesId

      })
       
        return createNow

    } catch (e) {
      console.log("E", e)
      // Log Errors
      throw Error("Error while Paginating Stories");
    }
  };
  
exports.updateStories = async (id, body) => {
  try {
    const mystic = await db.stories.update(body, {
      where: { id },
    });

    return mystic;
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};


exports.deleteStories = async (id, body) => {
    try {
      const mystic = await db.stories.destroy( {
        where: { id },
      });
  
      return mystic;
    } catch (e) {
      // Log Errors
      throw Error("Error while Paginating Stories");
    }
  };
