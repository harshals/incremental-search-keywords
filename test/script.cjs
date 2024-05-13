
const Extractor= require('incremental-search-keywords');

const options = {
                skipStopWords: false,
            }
 const json = {
                "title": "This is a sample title for testing the keyword extractor library.",
                "description": "This is a sample description for the library.",
                "content": "This is some future content related to the library."
            };
const result = IncrementalKeywordsExtractor.extract(json, options);
console.log(result);
