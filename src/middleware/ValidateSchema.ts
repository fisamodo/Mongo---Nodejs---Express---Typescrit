import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';
import Logging from '../library/Logging';
import { IAuthor } from '../models/Author';
import { IBook } from '../models/Book';
import { IAnswer } from '../models/Answer';
import { ISurvey } from '../models/Survey';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    author: {
        create: Joi.object<IAuthor>({
            name: Joi.string().required()
        }),
        update: Joi.object<IAuthor>({
            name: Joi.string().required()
        })
    },
    book: {
        create: Joi.object<IBook>({
            author: Joi.string()
                .regex(/^[0-9a-fA-F{24}$/]/)
                .required(),
            title: Joi.string().required()
        }),
        update: Joi.object<IBook>({
            author: Joi.string()
                .regex(/^[0-9a-fA-F{24}$/]/)
                .required(),
            title: Joi.string().required()
        })
    },
    answer: {
        create: Joi.object<IAnswer>({
            type: Joi.string()
                .regex(/^[0-9a-fA-F{24}$/]/)
                .required()
        })
    }
};

export const validatePost = (attributes: any) => {
    const error = attributes?.answers?.map((attribute: any) => {
        if (attribute.answer === '' || attribute.answer === 0) {
            return {
                source: { pointer: `data/attributes/answers/${attribute.questionId}` }
            };
        }
    });

    return error.filter((err: any) => err !== undefined);
};
