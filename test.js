const pinyin = require('./index');

var strings = ["椅子"];

strings.map((string) => {
    console.log(pinyin(string, {word: true}));
});
