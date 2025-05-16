const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all users
app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST a new user
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({ data: { name, email } });
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`🚀 Express API running on http://localhost:${PORT}`);
});
