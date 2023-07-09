const express = require('express')
const app = express();
const hbs = require('hbs')
const env = require('dotenv').config();
const routes = require('./routes/main')
const connectDB = require('./db/connect');


hbs.registerHelper('jsonStringify', function (context) {
  return JSON.stringify(context);
});

app.use(express.static('./public'));
app.use('', routes) 


app.set('view engine', 'hbs')
app.set("views", "views")  
  


const port = process.env.PORT || 3000; 
   
const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
        } catch (error) {
        console.log(error); 
        } 
    };
  
start();