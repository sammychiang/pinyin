const pinyin = require('./index');

var strings = ["哪儿"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
