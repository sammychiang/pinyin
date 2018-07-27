const pinyin = require('./index');

var strings = ["我"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
