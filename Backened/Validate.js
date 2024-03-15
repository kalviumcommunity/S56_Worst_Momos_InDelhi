const Joi = require('joi')

function validateInput(){
    const SignUpSchemea = Joi.object({
        location:Joi.string.required(),
        review:Joi.string.required(),
        ratings:Joi.string.required(),
        img:Joi.string.required()
    })

    const{error}=SignUpSchemea.validate();
    if(error){
        console.log(error)
        return false
    }
    return true
    
}

module.exports = validateInput;