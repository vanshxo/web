const express = require('express');
const fs = require('fs');
const path = require('path');
const { db } = require('../db'); // Import the db instance

const router = express.Router();

// Route to upload a resume from the project folder
router.post('/upload', async (req, res) => {
    const resumePath = path.join(__dirname, '../path_to_your_resume/your_resume.pdf'); // Adjust the path

    try {
        // Read the resume file
        const resumeBuffer = fs.readFileSync(resumePath);
        const resumeName = path.basename(resumePath);

        // Insert resume into the database
        await db.collection('resumes').insertOne({
            filename: resumeName,
            buffer: resumeBuffer,
        });

        res.status(201).json({ message: 'Resume uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading resume:', error);
        res.status(500).json({ message: 'Failed to upload resume' });
    }
});

module.exports = router;
