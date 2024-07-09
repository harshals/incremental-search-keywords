
import { extract } from "incremental-search-keywords";

const options = {
                minWordLength: 3,
                skipDigits: true,
                skipSpecialCharacters: true,
                skipStopWords: true,
                keys: ['title', 'content'],
                asItIs : ['order_date']
            }
 const json = {
                "title": "This is a sample title for testing the keyword extractor library.",
                "description": "This is a sample description for the library.",
                "content": "This is some future content related to the library.",
                "order_date":"2024-13-12" 
            };
const result = extract(json, options);
console.log(result);
