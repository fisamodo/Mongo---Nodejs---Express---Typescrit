import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Survey from '../models/Survey';
import Answer from '../models/Answer';

export const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Survey.find()
        .then((survey) => res.status(200).json({ survey }))
        .catch((error) => res.status(500).json({ error }));
};

export const createSurvey = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    console.log(data);
    const survey = new Survey({
        type: data.type,
        attributes: data.attributes
    });
    return survey
        .save()
        .then((survey) => res.status(201).json({ survey }))
        .catch((error) => res.status(500).json({ error }));
};

export const createAnswer = (req: Request, res: Response, next: NextFunction) => {
    const { type, attributes, relationships } = req.body;
    const answer = new Answer({
        type: type,
        attributes: attributes,
        relationships: relationships
    });
    return answer
        .save()
        .then((answer) => res.status(201).json({ answer }))
        .catch((error) => res.status(500).json({ error }));
};
