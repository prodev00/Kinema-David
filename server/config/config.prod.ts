require('dotenv').config();
import Config from '../types/config';

const prodConfig: Config = {
  db: {
    uri: process.env.MONGO_URI || '',
    options: {
      dbName: 'prod',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  }
};

export default prodConfig;
