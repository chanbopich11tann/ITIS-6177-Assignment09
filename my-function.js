const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/say', async (req, res) => {
    const { keyword } = req.query;

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword parameter is missing.' });
    }

    try {
        // You can use Axios to make an HTTP request to another service or API here if needed.
        // For simplicity, we'll just concatenate the keyword to "TANN says".
        const result = `TANN says ${keyword}`;
        res.json({ message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
