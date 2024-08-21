import express from 'express';
import bodyParser from 'body-parser';
import homeRoute from './routes/homeRoute.js'; // Ensure the correct path to homeRoute

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', homeRoute);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
