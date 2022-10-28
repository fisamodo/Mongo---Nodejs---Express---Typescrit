import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import mognoose from 'mongoose';
import { config } from './config/config';

const router = express();

//Connect to mongoose
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Connected!');
    })
    .catch((error) => {
        console.log('Error: ', error);
    });
