const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', ((error, data) => {}));

fs.readFile('employees.json', 'utf8', (error, data) => {
  if(error){
    console.log(error);
    return;
  } 
  console.log(data);
});

fs.writeFile('employees.json', '{"name": "Employee 72 Name", "salary": 2000}', ((error, data) => {}));

fs.unlink('employees.json', (error, data) => {
  console.log("Başarıyla silindi.");
});