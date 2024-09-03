const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "pop" directory
app.use('/images', express.static(path.join(__dirname, 'pop')));

// Home route (optional)
app.get('/', (req, res) => {
  res.send('Image server is running. Use /images/{filename} to access images.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
