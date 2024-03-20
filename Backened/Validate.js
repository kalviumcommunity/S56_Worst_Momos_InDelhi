const Joi = require('joi')

const validator = (schema) =>(payload)=>
schema.validate(payload,)

const signupSchema = Joi.object({
    location:Joi.string().required(),
    review:Joi.string().required(),
    ratings:Joi.number().required(),
    img: Joi.string().required(),
    createdby:Joi.string()
})

exports.validateSignup = validator(signupSchema)