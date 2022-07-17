const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  console.log(data);
  let errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isLength(data.fullname, { min: 2, max: 30 })) {
    errors.fullname = "Name must be between 2 and 30 characters";
  }

  if (validator.isEmpty(data.fullname)) {
    errors.fullname = "Name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
