const express = require('express');
const app = express();
const PORT = process.env.PORT || 5173;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the Gallery Container!' });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});