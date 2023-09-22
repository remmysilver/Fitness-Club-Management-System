const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simulated user data and actions
const users = {
  admin: { password: 'adminpassword', dashboardURL: '/Admin/adminpanel.html' },
  member: { password: 'memberpassword', dashboardURL: '/members/members.html' },
  trainer: { password: 'trainerpassword', dashboardURL: '/trainer/trainer.html' }
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  const user = users[username];

  if (user && password === user.password) {
    res.redirect(user.dashboardURL);
  } else {
    res.status(401).send('Invalid username or password. Please try again.');
  }
});

app.post('/admin-control-panel', (req, res) => {
  // Simulate actions for admin control panel
  // Add your logic here to handle admin actions
  res.send('Admin action successful');
});

app.post('/shift-request', (req, res) => {
  // Simulate shift request for member
  // Add your logic here to handle member shift request
  res.send('Shift request submitted');
});

app.post('/attendance-marking', (req, res) => {
  // Simulate attendance marking for trainer
  // Add your logic here to handle trainer attendance marking
  res.send('Attendance marked');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
