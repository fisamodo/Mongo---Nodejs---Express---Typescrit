import express from 'express';
import { createAuthor, DeleteAuthor, readAll, readAuthor, UpdateAuthor } from '../controllers/Author';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();
router.post('/create', ValidateSchema(Schemas.author.create), createAuthor);
router.get('/get/:authorId', readAuthor);
router.get('/get', readAll);
router.patch('/update/:authorId', ValidateSchema(Schemas.author.update), UpdateAuthor);
router.delete('/delete/:authorId', DeleteAuthor);

export = router;
