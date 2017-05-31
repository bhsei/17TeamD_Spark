var fs = require("fs");

fs.mkdir("/home/wyz/Desktop/fs/newdir",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("mkdir success");
});
