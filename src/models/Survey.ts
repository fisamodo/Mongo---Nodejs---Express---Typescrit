import mongoose, { Document, Schema } from 'mongoose';

interface IQuestions {
    questionId: string;
    questionType: string;
    label: string;
    required: boolean;
    attributes?: any;
}
interface IAttributes {
    title: string;
    description: string;
    questions: IQuestions[];
}
export interface ISurvey {
    type: string;
    attributes: IAttributes;
}

export interface ISurveyModel extends ISurvey, Document {}

const SurveySchema: Schema = new Schema(
    {
        type: { type: String, required: false },
        attributes: { type: Object, required: false }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ISurveyModel>('Survey', SurveySchema);
