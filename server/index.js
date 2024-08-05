// server.js
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./connect');
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth');
// const uploadFile = require('./routes/upload')
const app = express();
const port = 3000;

// Load env vars

dotenv.config();
app.use(cors({
  origin:["https://blogging-sigma-eight.vercel.app"],
  method:["POST","GET","PUT","DELETE","PATCH"],
  credentials:true
}))

// Connect to the database
connectDB();

// Middleware
app.use(express.json());



// Routes
app.use('/users', userRoutes);
app.use('/api',blogRoutes)
app.use('/auth', authRoutes);
// app.use('/upload', uploadFile)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
