const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; // Replace with a database in production

router.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  users.push({ username: req.body.username, password: hashedPassword });
  res.status(201).send("User registered!");
});

router.post('/login', async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign({ username: user.username }, 'secret');
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

module.exports = router;
