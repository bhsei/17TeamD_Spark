var fs = require("fs");

fs.writeFile('write.txt', 'write data',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log('write success');
});
