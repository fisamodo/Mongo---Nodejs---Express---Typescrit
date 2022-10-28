"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Author_1 = require("../controllers/Author");
const ValidateSchema_1 = require("../middleware/ValidateSchema");
const router = express_1.default.Router();
router.post('/create', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.author.create), Author_1.createAuthor);
router.get('/get/:authorId', Author_1.readAuthor);
router.get('/get', Author_1.readAll);
router.patch('/update/:authorId', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.author.update), Author_1.UpdateAuthor);
router.delete('/delete/:authorId', Author_1.DeleteAuthor);
module.exports = router;
