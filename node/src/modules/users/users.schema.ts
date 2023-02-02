import joi from 'joi'


export const postUserSCHEMA = joi.object({
    email: joi.string().email().required(),
    displayName: joi.string(),
    accessToken: joi.string().min(3).required(),
    photoURL: joi.string().uri(),
    phoneNumber: joi.string().min(14).max(15),
    birthday: joi.string().isoDate(),

})