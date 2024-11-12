
import { extract } from "../src/index.js";
//import { extract } from "incremental-search-keywords";

const options = {
                minWordLength: 3,
                skipDigits: true,
                skipSpecialCharacters: true,
                skipStopWords: true,
                omit:['due_date', 'order_date'],
                keys: ['order_nos', 'description1'],
                asItIs : ['status']
            }
 const json = {
  order_no: null,
  order_date: new Date(),
  due_date: new Date(),
  description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  status: 'Job Done'
}
const result = extract(json, options);
console.log(result)