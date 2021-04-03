const { success, fail } = require("../../config/response");
const { Book } = require("../../models");
//const { genSaltSync, hashSync } = require("bcrypt");

exports.getBook = async(req, res) => {
    try {
        const data = await Book.findAll();
        res.json(success({ msg: "data buku berhasil diterima", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.createBook = async({ body }, res) => {
    const payload = {
        type_books_id: body.type_books_id,
        name: body.name

    };
    try {
        //const salt = genSaltSync(100000);
        // body.password = hashSync(body.password, salt);
        const data = await Book.create(payload);
        res.json(success({ msg: "data buku berhasil ditambahkan", data }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};
exports.updateBook = async({ body }, res) => {
    if (!body.id) res.json(fail({ msg: "data id tidak ditemukan" }));
    try {
        const payload = body;
        const data = await Book.update(payload, {
            where: {
                id: body.id
            },
        });
        if (data) res.json(success({ msg: "data buku berhasil diubah", data }));
        else res.json(fail({ msg: "data buku gagal diperbarui" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};

exports.deleteBook = async({ body }, res) => {
    try {
        const data = await Book.destroy({
            where: {
                id: body.id
            },
        });
        if (data) res.json(success({ msg: "data user berhasil dihapus", data }));
        else res.json(fail({ msg: "data user gagal dihapus" }));
    } catch (error) {
        res.json(fail({ msg: error }));
    }
};