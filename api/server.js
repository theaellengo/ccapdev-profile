const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

// Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profs', require('./routes/api/profs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
