const fs = require('fs');
const path = require('path');

const words = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/words.json'), 'utf8'));
let markdown = '# 常用的单词 \n'
for(let i=0;i< words.length; i++){
  markdown = markdown + `<p>${i+1}. <a href="https://fanyi.baidu.com/#en/zh/${words[i].word}" target="_blank" >${words[i].word}</a> (${(words[i].frequency*100).toFixed(4)}%) </p>\n`;
}
 
fs.writeFileSync(
  path.resolve(__dirname, '../', 'README.Md'),
  markdown,
);


