const pinyin = require('./index');

var strings = ["女儿"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
