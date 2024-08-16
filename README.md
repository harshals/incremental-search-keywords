# Incremental Search Keyword Library

This is a JavaScript library that provides functionality to extract keywords from a string, an object, or an array of strings. The main function of the library is `extract`.

## Installation

To install the library, use the following command:

```bash
npm install incremental-search-keywords

## Browser Usage

You can also use the `extract` function in a browser environment. First, include the library in your HTML file:

```html
<script src="path/to/incremental-search-keywords.js" ></script>
```

Then, you can use the `extract` function to extract keywords from a string, an object, or an array of strings. Here's an example:

```javascript
const input = "This is a sample string for testing the keyword extractor library.";
const options = {
    minWordLength: 3,
    skipDigits: true,
    skipSpecialCharacters: true,
    skipStopWords: true,
    stopWords: ['the', 'a', 'is', 'for'],
    asItIs: ['keyword', 'extractor'] // Array of words to be included as they are

};

const keywords = extract(input, options);

console.log(keywords);
```

In this example, the `extract` function will extract keywords from the `input` string based on the `options` object. The `options` object specifies that the minimum length of a keyword should be 3, digits should be skipped, special characters should be skipped, stop words should be skipped, and the stop words are 'the', 'a', 'is', and 'for'.

## Nodejs Usage

First, import the `extract` function from the library:

```javascript
const { extract } = require('keyword-extractor-library');
```

Then, you can use the `extract` function to extract keywords from a string, an object, or an array of strings. Here's an example:

```javascript
const input = { "title": "This is a sample string for testing the keyword extractor library." };
const options = {
    minWordLength: 3,
    skipDigits: true,
    skipSpecialCharacters: true,
    skipStopWords: true,
    stopWords: ['the', 'a', 'is', 'for']
};

const keywords = extract(input, options);

console.log(keywords);
```

In this example, the `extract` function will extract keywords from the `input` string based on the `options` object. The `options` object specifies that the minimum length of a keyword should be 3, digits should be skipped, special characters should be skipped, stop words should be skipped, and the stop words are 'the', 'a', 'is', and 'for'.

## Default Options in `extract`

The `extract` function has some default options that you can override if necessary. Here's a description of each option:

- `minWordLength`: This option specifies the minimum length of a word to be considered for extraction. The default minimum length is 3.

- `skipDigits`: This option specifies whether to skip words that are purely digits. The default is true, meaning words that are purely digits are skipped.

- `skipSpecialCharacters`: This option specifies whether to skip words that contain special characters. The default is true, meaning words with special characters are skipped.

- `skipStopWords`: This option specifies whether to skip words that are considered common, or "stop words". The default is true, meaning stop words are skipped.

- `stopWords`: This option allows you to provide your own list of stop words. The default is a predefined list of common stop words.

- `keys`: This option allows you to provide a list of keys to extract from the input if the input is an object. The default is null, meaning all keys are considered.

- `omit`: This option allows you to provide a list of keys to omit from the input if the input is an object. The default is an empty array, meaning no keys are omitted by default. In case both keys and omit are present, keys takes priority


- `asItIs`: This option allows you to specify an array of words that should be included in the output without modification, regardless of other filtering options such as `skipDigits`, `skipSpecialCharacters`, or `skipStopWords`. This is useful for ensuring specific keywords or phrases are always included in the extracted results. The default is an empty array, meaning no words are included as-is by default.

Here's an example of how to override the default options:

```javascript
const options = {
  minWordLength: 2,
  skipDigits: false,
  skipSpecialCharacters: false,
  skipStopWords: false,
  stopWords: ['my', 'custom', 'stopwords'],
  keys: ['key1', 'key2']
};

const keywords = extract('This is a test string', options);
```