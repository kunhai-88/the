const fs = require('fs');
const path = require('path');

const words = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/words.json'), 'utf8'));
let markdown = '# 常用的单词 \n'
for(let i=0;i< words.length; i++){
  markdown = markdown + `- ${i+1} - [${words[i].word}](https://fanyi.baidu.com/#en/zh/${words[i].word})  (${(words[i].frequency*100).toFixed(4)}%) \n`;
}
 
fs.writeFileSync(
  path.resolve(__dirname, '../', 'README.Md'),
  markdown,
);


