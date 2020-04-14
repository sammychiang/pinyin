var pinyin = require('./index');

var strings = ["不客气"];

strings.forEach((string) => {
    console.log(pinyin(string, {
        segment: true
    }));
});