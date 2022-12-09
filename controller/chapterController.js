const chapterService = require('../services/chapterService')
const {validateChapter} = require('../validate/validate');

//get all Chapters
exports.getChapters= async (req, res, next) => {
  try {
 
    const mysdy = await chapterService.getChapters(req.body);

      res.send({
        status: "success",
        length: mysdy?.length,
        mysdy: mysdy,
        message: "Successfully All Chapters"
      });
    
  } catch (e) {
      res.status(400).json({
        status: 400,
        message: e.message
      });
    }
 };

 //create new Chapters => api/v1/book/admin/chapterService/new

 exports.newChapters = async (req, res, next) => {
  
  try {

    // phải validate trước , nếu ok thì gọi hàm tạo trong db, nếu validate sai thì báo lỗi
    const {error, value} = validateChapter(req.body)
    
    if(error) {
      console.log("eror insert chapters",error)
      return res.send(error.details);
    }else {
      const mysdy = await chapterService.newChapters(value);
      return res.send(mysdy);
    } 
    
  }catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message
    });
  }
}
  
//Update AuChaptersthor => api/v1/book/admin/chapterService/:id
exports.updateChapters = async (req, res, next) => {
  const mysdy = await chapterService.updateChapters(req.params.id, req.body);

  res.send({
    status: "success",
    length: mysdy?.length,
    data: mysdy,
    message: "Update Chapters Successfully"
  });

};

//Delete one Chapters => api/v1/book/admin/chapterService/:id
exports.deleteChapters= async (req, res, next) => {

  await chapterService.deleteChapters(req.params.id);

  res.send({
    status: "success",
    message: "Delete Chapters Successfully"
  });


}

