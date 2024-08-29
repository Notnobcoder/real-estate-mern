// import readLine from "node:readline"
// import os from "node:os"
// import { exec } from "node:child_process"
//
//
// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('What is your name?', (name) => {
//   console.log(`Hello ${name}!`);
//   console.log(`os name is ${os.type()}`)
//   exec('top package.json')
//
//
//
//
//
//   rl.close();
// });

import http from "node:http"


const routes = [{
  "/": (req, res) => {
    return res.end("hello world")
  }
}]

const server = http.createServer((req, res) => {
  res.end("hello world")


  if (req.url in routes) {
    return routes[req.url](req, res)
  }

})


server.listen(9000)

