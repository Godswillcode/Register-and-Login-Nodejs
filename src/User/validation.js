import { check } from "express-validator";


const validateBody = {
    login: [
        check('email')
        .isEmail()
        .trim()
        .withMessage("email cannot be empty"),
        check('role')
        .not()
        .isEmpty()
        .trim()
        .withMessage('role must be one of staff or admin'),
        check('oldPassword')
        .not()
        .isEmpty()
        .trim()
        .withMessage('password cannot be empty')
    ]
}

export default validateBody