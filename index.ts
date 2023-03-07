import dotenv from 'dotenv';
import server from './src/server';
import { LogErrors, LogSucces } from './src/utils/logger';

// * Configuration the .env file
dotenv.config(); 

const port = process.env.PORT || 8000;

// * Execute Server
server.listen(port, () => {
    LogSucces(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

// * Control Server Error
server.on('error', (error) => {
    LogErrors(`[SERVER ERROR]: ${error}`);
});