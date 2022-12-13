const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = db.Sequelize.Op;
const catchAsyncErrors = require('../middlewares/catchAsycError') 

const getPagination = (page, size) => {
  const limit = size ? + size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// const getPagingData = (data, page, limit) => {
//   const { count: totalItems, rows: valueIndex } = data;
//   const currentPage = page ? + page : 0;
//   const totalPages = Math.ceil(totalItems / limit);

//   return { totalItems, valueIndex, totalPages, currentPage };
// };

//npx sequelize-cli model:generate --name stories --attributes name:string,link:string,description:text,images:text,status:integer,dateCreated:date,dateUpdated:date,storyauthorsId:bigint,storytypesId:bigint
exports.getStories = async (query, body, limit) => {
  try {
 // truong name vua co the tim theo ten tac gia/ hoac ten truyen  => dung sequelize.literal
    const { page, size, name } = query;
    //select name in table stories(name) and seclect table storyauthors (storyauthorsName)
   var condition =  { [Op.or]: [
    { name: Sequelize.literal(`stories.name like "%${name}%"`) }, 
    { storyauthorsName: Sequelize.literal(`storyauthors.storyauthorsName like "%${name}%"`) }
  ]}
    //var condition =  { name: { [Op.like]: `%${name}%` } } //`%${name}%` name="Hieu" lay tat ca truong name co ten laf hieu
    
    //var condition = {$and:Sequelize.literal(`stories.name like %${name}% `)}
    console.log("page",page)
    console.log("size",size)

    const { limit, offset } = getPagination(page, size);
    console.log("limit",limit)
    console.log("offset",offset)
    //get One-To-Many relationships

    const mysdy = await db.stories.findAll({
       logging : true,
       limit: limit, 
       offset: offset,
       where :  {
        [Op.and]: condition,
       // [Op.and]: Sequelize.literal(`stories.name like "%${name}%"  or storyauthors.storyauthorsName like "%${name}%" `)   
      },
        include: [
          {
            model: db.storyauthors,
            as: 'storyauthors',
           // where :  { storyauthorsName: { [Op.like]: `%${name}%` } },
            attributes: ['storyauthorsName']

            // attributes:['storyauthorsName',] //attributes chỉ lấy một trường trong bảng
        },
        {
          model: db.storytypes,
          as: 'storytypes',
          attributes:['name']
      }
      ],
      // where: id
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
}


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
