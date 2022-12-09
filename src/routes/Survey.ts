import express from 'express';
import { createAnswer, createSurvey, readAll } from '../controllers/Survey';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();
router.get('/', readAll);
router.post('/', createSurvey);
router.post('/:id/answers', createAnswer);

export = router;
