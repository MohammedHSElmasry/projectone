import Joi from "joi";
export const create = {
  bode: Joi.object({
    cityname: Joi.string().min(3).max(20).required(),
  }),
};
