const pinyin = require('./index');

var strings = ["四块儿"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
