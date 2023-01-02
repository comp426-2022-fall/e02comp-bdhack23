const express = require('express');

const app = express();

const port = 5555;

//args["message"];

// const message = args.message || "It works!";
const message =  'It works!';

// app.use((request, response) => {
//     response.json({ message: message }); 
// });

app.get('/app/', (request,response)=>{
    response.json({ message: message }); 
})




// // Require http module
// const http = require('http');

// // Require fs module
// const fs = require('fs');

// // Require minimist module.
// const args = require('minimist')(process.argv.slice(2));

// // Define a const `port`as 5555
// const port = args.port || 5555;

// // args["message"];

// const message = args.message || "It works!";


// const server = http.createServer((err, req, res) => {
//    // res.statusCode = 200
//    // res.setHeader('Content-Type', 'text/html')
//    res.send({message: message})
//     res.end(data)
// })

// console.log(`{"message": ${message}}`)


app.listen(port, () => {
    console.log(`{"message": ${message}}`)
});
