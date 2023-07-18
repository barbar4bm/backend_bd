import express from 'express';

import health from './router/health';
import data from './router/data';

const app = express();
const port = 8000;

app.use('/api', health);
app.use('/api/data', data);

app.listen(port, () => {
  console.log("Server Started in port : " + port);
});
