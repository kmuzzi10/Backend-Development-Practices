import express from "express"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form></h1>');
});

app.use("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
