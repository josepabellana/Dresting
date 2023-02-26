const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/',)
async function start() {
    try {
        // await db.sequelize.sync();
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();