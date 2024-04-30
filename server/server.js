import express from "express";
import axios from "axios";

const app = express();
app.use(express.urlencoded({ extended: true }));

import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();



app.get("/photoes", async (_req, res) => {
  const value = await client.get('photoes');
  res.json(JSON.parse(value))

})


app.get("/photos", async (_req, res) => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/photos")
  res.json(data.data)

})

app.listen(7000, () => {
  console.log("Server running at port 7000");
});
