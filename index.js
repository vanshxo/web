const express = require('express');
const path = require('path');

require('dotenv').config()


const app = express();


// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.static(path.join(__dirname,'uploads')))
// Handle the root route to serve the main HTML file
app.get('/download_resume',(req,res)=>{
    const file=path.join(__dirname,'uploads','Vansh_Khatri_Resume.pdf');
    res.download(file);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});







// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
