const fs = require('fs');

const writeFile = fileContent => {
   return new Promise((resolve, reject) => {
      fs.writeFile('./dist/readme.md', fileContent, err => {
         // if there's an error, reject the promis and send the error to the promise's `.catch()` method
         if (err) {
            reject(err);
            // return out of the function to make sure the Promise doesn't execute the resolve function as well
            return;
         }

         // if everything went well, resolve the Promise and sent the successful data to the `.then()` method
         resolve({
            ok: true,
            message: 'readme.MD created!'
         });
      });
   });
};

const readFile = fileName => {
   return new Promise ((resolve, reject) => {
      fs.readFile('./src/' + fileName, 'utf8', (err, data) => {
         // err ? reject(err) : resolve(data);
         err ? reject(err): resolve(data);
      });
   });
};

module.exports = {
   writeFile: writeFile,
   readFile: readFile
};