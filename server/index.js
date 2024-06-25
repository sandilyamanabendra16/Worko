const express= require('express');
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
dotenv.config();

const userRoute= require('./routes/userRoute');
app.use(
  cors({
    origin: "*",
  })
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/worko', userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
