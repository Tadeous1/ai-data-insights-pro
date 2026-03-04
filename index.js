const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for file uploads
app.use(fileUpload());

// Endpoint for file uploads
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    // Access the uploaded file
    const uploadedFile = req.files.file;

    // Here you can handle the file (e.g., save it, analyze it, etc.)
    // For now, let's just send a response
    res.send(`File ${uploadedFile.name} uploaded successfully!`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
