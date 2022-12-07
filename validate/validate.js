const Joi = require("joi");

//validate form
const validator = (index) => (payload) => {
   return index.validate(payload, { abortEarly: false, allowUnknown: true });
};
//chu ý đã khai báo thông tin rồi nên trong service trả về data là đủ
const chapterSchema = Joi.object({
        name: Joi.string().min(1).max(200).required(),
        number: Joi.number().integer(),
        content: Joi.string().required(),
        status: Joi.number().integer(),
        dateCreated: Joi.date(),
        dateUpdated: Joi.date(),
        storiesId: Joi.number().integer(),
});


const authorSchema = Joi.object({
          storyauthorsName: Joi.string().min(1).max(100).required(),
          description: Joi.string().min(1).max(400).required(),
          status: Joi.number().integer().required(),
          dateUpdated: Joi.date(),
          dateCreated: Joi.date(),
})

exports.validateChapter = validator(chapterSchema);
exports.validateAuthor = validator(authorSchema);
