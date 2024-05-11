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
    stopWords: ['the', 'a', 'is', 'for']
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