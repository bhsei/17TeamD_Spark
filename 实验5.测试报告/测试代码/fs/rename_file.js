var fs = require('fs');

fs.rename('rename.txt','new_rename.txt',function(err){
  if(err){
   console.error(err);
  }else{
   console.log('rename success');
  }
});
