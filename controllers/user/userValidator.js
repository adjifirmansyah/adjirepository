const { body, validationResult } = require("express-validator");
const { fail } = require("../../config/response");
const { User } = require("../../models/User");

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(fail({ msg: errors.array() }));
    }
    next();
};

exports.postValidator = [
    body("phone", "nomor handphone salah")
    .isMobilePhone()
    .withMessage("Nomor handphone kamu harus benar ya")
    .custom((value) => {
        return User.findOne({ where: { phone: value } }).then((user) => {
            if (user) {
                return Promise.reject("Mobile phone already in use");
            }
        });
    }),
];