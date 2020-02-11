var fs = require('fs');
var byline = require('byline');
var path = require('path');
 
var stream = fs.createReadStream(path.resolve('./count_1w.txt'));
stream = byline.createStream(stream);
var data = {}
stream.on('data', function(line) {
  const row = line.toString();
  if(row){
    const res = row.split('\t')
    data[res[0]] = +res[1];
  }
 
});
stream.on('end',()=>{
  var words10000 = fs.createReadStream(path.resolve('./google-10000-english-no-swears.txt'));
  words10000 = byline.createStream(words10000);
  const words = [];
  words10000.on('data', function(line) {
    const row = line.toString();
    if(row){
      words.push({
       word: row, 
       count:data[row]
      }
      )
    }
   
  });
  words10000.on('end', function(line) {
    total = 0;
    for(let i=0;i< words.length;i++){
       total+= words[i].count;
    }
    console.log(total);
    for(let i=0;i< words.length;i++){
      words[i].frequency= words[i].count / total;
   }
    fs.writeFileSync(
      path.resolve(__dirname,'../data/' ,'words.json'),
      JSON.stringify(words, null, 2),
    );
  });
 
})
