import mongoose, { Document, Schema } from 'mongoose';

interface IAttributes {
    answer: string | number;
}
interface IRelationships {
    survey: ISurveyData;
}
interface ISurveyData {
    type: string;
    id: string;
}
export interface IAnswer {
    type: string;
    attributes: IAttributes[];
    relationships: IRelationships;
}

export interface IAnswerModel extends IAnswer, Document {}

const AnswerSchema: Schema = new Schema({
    type: { type: String, required: true },
    attributes: { type: Object, required: true },
    relationships: { type: Object, required: true }
});

export default mongoose.model<IAnswerModel>('Answer', AnswerSchema);
