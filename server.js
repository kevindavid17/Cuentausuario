const express = require('express');
const cors = require('cors');  
const app = express();
const port = 8000;


require('./server/config/mongoose.config.js')

app.use(cors()); //Esto es nuevo
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

const allUserRoutes = require('./server/routes/user.routes');
const allAccountRoutes = require('./server/routes/account.routes');

allUserRoutes(app);
allAccountRoutes(app);

app.listen(port, () => console.log("Server is listening at port ", port));