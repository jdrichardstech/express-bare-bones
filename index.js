const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
