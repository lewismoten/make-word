# Make Word

Generates pronounceable text in English.

*There has been not attempt made to prevent or remove existing words, including obscene from being generated.*

```javascript

let makeWord = require('make-word');

makeWord();
// otheiful

for(let i = 0; i < 10; i++) {

  makeWord(2, 10);

}
// wheiskine
// athight
// qujhogh
// gheyeegru
// uquly
// criespell
// aw
// st
```

## Installation
```
$ npm install pronounceable-text-generator
```
## API
```javascript
var makeWord = require('make-word');
```
### makeWord(min, max)
- parameter *{number} = 8* min: The minimum length of the word.
- parameter *{number} = 8* max: The maximum length of the word.
- returns *{string}*: A randomly generated word that.
