const request = require('request');
const fs = require('fs');

const urlRequest = process.argv[2];
const filePath = process.argv[3];

function fetcher() {
  request(urlRequest, (error, response, body) => { 
    fs.writeFile(filePath, body, err => {
      if (err) {
        return console.error(err);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    })
  })
}
fetcher();