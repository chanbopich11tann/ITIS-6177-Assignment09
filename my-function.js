const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/say', async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword parameter is missing.' });
  }

  const result = `TANN says ${keyword}`;
  res.json({ message: result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
