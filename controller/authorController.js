const storyauthors = require('../services/authorService')
const {validateAuthor} = require('../validate/validate');

//get all Author
exports.getAuthor= async (req, res, next) => {
  try {
 
    const mysdy = await storyauthors.getAuthor(req.query);

      res.send({
        status: "success",
        length: mysdy?.length,
        mysdy: mysdy,
        message: "Successfully All Author"
      });
    
  } catch (e) {
      res.status(400).json({
        status: 400,
        message: e.message
      });
    }
 };

 //create new Author => api/v1/book/admin/storyauthors/new

 exports.newAuthor = async (req, res, next) => {
  
  try {

    const {error, value} = validateAuthor(req.body)
    
    if(error) {
      console.log("eror insert author",error)
      return res.send(error.details);
    }else {
      const mysdy = await storyauthors.newAuthor(value);
      return res.send(mysdy);
    } 
    
  }catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message
    });
  }
}
  
//Update Author => api/v1/book/admin/storyauthors/:id
exports.updateAuthor = async (req, res, next) => {
  const mysdy = await storyauthors.updateAuthor(req.params.id, req.body);

  res.send({
    status: "success",
    length: mysdy?.length,
    data: mysdy,
    message: "Update Author Successfully"
  });

};

//Delete one storyauthors => api/v1/book/admin/storyauthors/:id
exports.deleteAuthor = async (req, res, next) => {

  await storyauthors.deleteAuthor(req.params.id);

  res.send({
    status: "success",
    message: "Delete Author Successfully"
  });


}

