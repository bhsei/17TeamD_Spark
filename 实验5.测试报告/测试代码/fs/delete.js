var fs = require("fs");

fs.unlink('delete.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("delete success");
});
