const fs = require('fs');

const data = {
  name: 'John',
  age: 30,
};

const jsonData = JSON.stringify(data);

fs.writeFile('data.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Data saved to data.json');
});
