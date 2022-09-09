require('dotenv').config();
import Config from '../types/config';

const devConfig: Config = {
  db: {
    uri: process.env.MONGO_URI || '',
    options: {
      dbName: 'dev',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
  }
};

export default devConfig;
