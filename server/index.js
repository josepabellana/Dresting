const express = require('express');
const app = express();
const {router} = require('./routers/router');
const cors = require('cors');
const db = require('./models');
const port = process.env.PORT || 3001;
const corsConfig = {
    origin: [process.env.URL || 'http://localhost:3001', process.env.CLIENTURL || 'http://localhost:4200'],
    credentials: true,
  }
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);
async function start() {
    try {
        await db.sequelize.sync();
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();