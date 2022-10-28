import express from 'express';
import { createBook, DeleteBook, readAll, readBook, UpdateBook } from '../controllers/Book';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();
router.post('/create', ValidateSchema(Schemas.book.create), createBook);
router.get('/get/:bookId', readBook);
router.get('/get', readAll);
router.patch('/update/:bookId', ValidateSchema(Schemas.book.update), UpdateBook);
router.delete('/delete/:bookId', DeleteBook);

export = router;
