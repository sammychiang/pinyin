const pinyin = require('./index');

var strings = ["在"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
