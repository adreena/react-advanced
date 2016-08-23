import express from 'express';
const app = express();

// app.use('/', function(req,res){
//     res.send('hello world');
// });

app.use('/', express.static('public'))

app.listen(process.env.PORT, process.env.IP);
console.log(`Server is running on ${process.env.IP} : ${process.env.PORT}`);