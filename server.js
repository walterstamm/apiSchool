const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;
const bodyParser = require('body-parser');
const mongodb = require('./database/db');
const studentsRoutes = require('./routes/studentRoutes');
const teachersRoutes = require('./routes/teacherRoutes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/students", studentsRoutes);
app.use("/teachers", teachersRoutes);
app.use("/", (req, res) => {
    res.send("Hello World"); 
});


mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });


module.exports = router;
