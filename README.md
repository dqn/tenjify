# tenjify

Convert the image to Braille.

## Installation

Using yarn:

```bash
$ yarn add tenjify
```

Using npm:

```bash
$ npm install tenjify
```

## Example

```js
const { tenjify } = require("tenjify");

const text = await tenjify("./twitter.png", { width: 40, threshold: 150 });
console.log(text);

//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣶⣶⣦⣄⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⢠⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⠟⠁⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣷⣦⣤⣀⣀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⢠⣀⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣈⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⠀⣤⡀⠀⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//⠀⣿⣧⣀⣀⣀⠀⣠⡀⠀⢀⣄⠀⠀⣠⠀⢀⣄⠀⣿⣇⣀⣀⠀⣿⣄⣀⡀⠀⢀⣠⣤⣀⠀⠀⠀⣀⣀⣀⠀
//⠀⣿⡏⠉⠉⠉⠀⣿⡇⠀⢸⣿⠀⠀⣿⡇⢸⣿⠀⣿⡏⠉⠁⠀⣿⡋⠉⠁⢰⣿⣥⣤⣽⡷⠀⣾⠋⠉⠉⠀
//⠀⠙⢿⣶⣶⣶⠀⠹⢷⣶⡾⠿⣶⣶⠟⠀⢸⡿⠀⠹⢷⣶⣶⠀⠻⢷⣶⡦⠈⠻⣦⣤⣤⡄⠀⣿⠀⠀⠀⠀
```

## Options

| name      | type    | required | description                        | default |
| --------- | ------- | -------- | ---------------------------------- | ------- |
| width     | number  | optional | width of the text to be generated  | 30      |
| threshold | number  | optional | threshold for binarization (0-255) | 128     |
| reverse   | boolean | optional | reverse black and white            | false   |

## License

MIT
