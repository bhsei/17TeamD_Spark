var fs = require("fs");

fs.rmdir("./newdir/subdir1",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("read newdir");
   fs.readdir("./newdir",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});
console.log('delete dir success');
