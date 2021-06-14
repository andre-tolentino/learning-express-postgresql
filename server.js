const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3333;

const users=[];

app.use(express.json());

app.get('/users', (req, res) =>{
  res.json(users)
});

app.post('/users', (req, res) =>{
  const {name, email, age, gender} = req.body;
  const id = uuidv4();

  const newUser = {id, name, email, age, gender};
  users.push(newUser);
  res.json(newUser);
});




app.listen(port, () =>{
  console.log(`Server running at http://localhost:${port}`)
});