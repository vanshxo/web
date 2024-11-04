const express = require('express');
const path = require('path');
// const { connectDB, getDB } = require('./config/db');
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// (async()=>{
//   try{
//     await connectDB(); // Wait for the connection to complete
//     const db = getDB(); // Retrieve the database instance
//     console.log('Database instance retrieved successfully');
//   }
//   catch(error){
//     console.error(`Failed to connect to the database: ${error.message}`);
//     process.exit(1); // Exit if the connection fails
//   }
// })()



// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.static(path.join(__dirname,'uploads')))
// Handle the root route to serve the main HTML file
app.get('/download_resume',(req,res)=>{
    const file=path.join(__dirname,'uploads','Vansh_KhatriCV.pdf');
    res.download(file);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// app.get('/Register',(req,res)=>{
//   res.sendFile(path.join(__dirname,'frontend','register.html'));
// })
// app.get('/Login',(req,res)=>{
//   res.sendFile(path.join(__dirname,'frontend','login.html'));
// })

// app.post('/Login',(req,res)=>{
//   res.send({'unavailable':'users'});
// })
// app.post('/Register',(req,res)=>{
//   const fields=req.body;
//    res.send({'unavailable':'users'});
   
  
// })



// Start the server
app.listen(8000,()=>{console.log('server has started on localhost:8000')})
module.exports=app;
