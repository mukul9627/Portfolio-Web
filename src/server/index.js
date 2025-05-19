const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

app.listen(5000, () => console.log('✅ Express API running at http://localhost:5000'));
