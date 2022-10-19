import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { router } from './routes';
import swaggerFile from './swagger.json';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', router);

app.use(errorMiddleware);

app.listen(3333, () => console.log('Server is Running!'));
