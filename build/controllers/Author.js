"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAuthor = exports.UpdateAuthor = exports.readAll = exports.readAuthor = exports.createAuthor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Author_1 = __importDefault(require("../models/Author"));
const createAuthor = (req, res, next) => {
    const { name } = req.body;
    const author = new Author_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name
    });
    return author
        .save()
        .then((author) => res.status(201).json({ author }))
        .catch((error) => res.status(500).json({ error }));
};
exports.createAuthor = createAuthor;
const readAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return Author_1.default.findById(authorId)
        .then((author) => (author ? res.status(200).json({ author }) : res.status(404).json({ message: 'Not found ' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.readAuthor = readAuthor;
const readAll = (req, res, next) => {
    return Author_1.default.find()
        .then((author) => res.status(200).json({ author }))
        .catch((error) => res.status(500).json({ error }));
};
exports.readAll = readAll;
const UpdateAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return Author_1.default.findById(authorId)
        .then((author) => {
        if (author) {
            author.set(req.body);
            return author
                .save()
                .then((author) => res.status(201).json({ author }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.UpdateAuthor = UpdateAuthor;
const DeleteAuthor = (req, res, next) => {
    const authorId = req.params.authorId;
    return Author_1.default.findByIdAndDelete(authorId)
        .then((author) => (author ? res.status(201).json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.DeleteAuthor = DeleteAuthor;