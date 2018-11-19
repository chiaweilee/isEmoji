## isemoji

*inspire by @christophior/isEmoji*

### Demo

https://chiaweilee.github.io/isEmoji/index.html

### Install

```
npm install @chiaweilee/isemoji
```

### Usage

```JavaScript
require('@chiaweilee/isemoji')

'🀄️'.isemoij() // true
```

*or*

```JavaScript
const isemoji = require('@chiaweilee/isemoji')

isemoij('🀄️') // true
```

### Result

`return true` if a string is an emoji

also, `return true` if a string `included` emoji(s)

### Remove emoji

```JavaScript
require('@chiaweilee/isemoji')

'Hello🀄World'.removeEmoji() // 'HelloWorld'
```
