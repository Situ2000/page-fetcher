const request = require('request');
const fs = require('fs');

const urlRequest = process.argv[2];
const filePath = process.argv[3];

function example() {
  request(urlRequest, (error, response, body) => { 

    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err);
      }
    })
  })
}
example();