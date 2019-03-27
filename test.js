const pinyin = require('./index');

var strings = ["朋友们"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
