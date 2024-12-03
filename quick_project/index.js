const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from the current directory
app.use(express.static('./'));

// Generate random person data
function generatePerson() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.person.bio(),
    avatar: faker.image.avatar(),
    occupation: faker.person.jobTitle()
  };
}

// Generate an array of random people
function generatePeople(count = 10) {
  return Array.from({ length: count }, generatePerson);
}

// API endpoint to get people
app.get('/api/people', (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const people = generatePeople(count);
  res.json(people);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
