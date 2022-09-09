import express, { Request, Response } from 'express';
import { initMiddleware, initMongoose } from './core/init';
import contact from './routes/contact';

const app = express();
const PORT = 8000;

initMongoose();
initMiddleware(app);

app.get('/', (_req: Request, res: Response) => {
  res.send({
    message: 'API running',
  });
});

app.use('/api/contact', contact);

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
