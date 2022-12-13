const stories = require('../services/storiesService')
const {validateStory} = require('../validate/validate');
//get all stories
// 7. connect one to many relation Product and Reviews


exports.getStories = async (req, res, next) => {
  try {

    const mysdy = await stories.getStories(req.query);

      res.send({
        status: "success",
        length: mysdy?.length,
        mysdy: mysdy,
        message: "Successfully All stories"
      });
    
  } catch (e) {
      res.status(400).json({
        status: 400,
        message: e.message
      });
    }
 };

 //create new stories => api/v1/book/admin/stories/new

 exports.newStories = async (req, res, next) => {
  
  try {
    const {error, value} = validateStory(req.body)

    if(error) {
      console.log("Get all story error!!!👽👻",error)
      return res.send(error.details);
    }else {
      const mysdy = await stories.newStories(value);
      return res.send(mysdy);
    } 

    // const mysdy = await stories.newStories(req.body);


    // res.send({
    //   status: "success",
    //   length: mysdy?.length,
    //   data: mysdy,
    //   message: "Successfully create stories"
    // });
    
  }catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message
    });
  }
}
  
//Update stories => api/v1/book/admin/stories/:id
exports.updateStories = async (req, res, next) => {
  const mysdy = await stories.updateStories(req.params.id, req.body);

  res.send({
    status: "success",
    length: mysdy?.length,
    data: mysdy,
    message: "Update Successfully"
  });

};

//Delete one stories => api/v1/book/admin/stories/:id
exports.deleteStories = async (req, res, next) => {

  await stories.deleteStories(req.params.id);

  res.send({
    status: "success",
    message: "Delete Successfully"
  });


}

