const Joi = require("joi");

const createStudentSchema = (student) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    cnic: Joi.string().max(13).required(),
    gender: Joi.string().min(4).max(6).required(),
    cell: Joi.string().max(11).required(),
    dob: Joi.string().required(),
    password: Joi.string().min(8).max(15).required(),
  });

  return schema.validate(student);
};

module.exports = createStudentSchema;
