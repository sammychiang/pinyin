const pinyin = require('./index');

var strings = ["都"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
