const Joi = require('joi')

function validateInput(){
    const SignUpSchema = Joi.object({
        location:Joi.string().required(),
        review:Joi.string().required(),
        ratings:Joi.string().required(),
        img:Joi.string().required()
    })

    const{error}=SignUpSchema.validate();
    if(error){
        console.log(error)
        return false
    }
    return true
    
}

module.exports.validateInput = validateInput;