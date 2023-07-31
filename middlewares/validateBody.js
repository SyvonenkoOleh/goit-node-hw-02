const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      if (req.method === "PATCH") {
        return next(HttpError(400, "missing field favorite"));
      } else {
        return next(HttpError(400, "missing fields"));
      }
    }

    const { error } = schema.validate(req.body);
    if (error) {
      const fieldName = error.details[0].context.label;
      return next(HttpError(400, `missing required ${fieldName} field`));
    }

    next();
  };
  return func;
};

module.exports = validateBody;