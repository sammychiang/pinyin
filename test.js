const pinyin = require('./index');

var strings = ["爸爸"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
