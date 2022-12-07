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

exports.validateChapter = validator(chapterSchema);
