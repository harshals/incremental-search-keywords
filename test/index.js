
import { extract } from "../src/index.js";
//import { extract } from "incremental-search-keywords";

const options = {
                minWordLength: 3,
                skipDigits: false,
                skipSpecialCharacters: true,
                skipStopWords: true,
                omit:['due_date', 'order_date'],
                asItIs : ['status']
            }
 const json = {
    order_no: NaN,
    order_date: "2023-08-16T00:28:32.454Z",
    due_date: "2025-08-15T08:28:24.443Z",
    description: 'The Football Is Good For Training And Recreational Purposes',
    status: 'New Modification Required!',
    amount: Number.POSITIVE_INFINITY,
    currency: '   ',
    customer: '',
    discount : 400.00
  };
const result = extract(json, options);
console.log(result)