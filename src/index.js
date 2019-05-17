import express from 'express';
import bodyParser from 'body-parser';
import Route from './route';
import * as errorHandler from './middleware/errorHandler';

const app = express();
const port = '9090';

app.use(bodyParser.json());
app.use('/', Route);

app.use(errorHandler.notFoundHandler);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.serverErrorHandler);

app.listen(port, () => {
  console.log('Shop Window API running at: ' + port);
});
