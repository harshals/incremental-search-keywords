// Main library exports - these are packaged in your distributable

/**
 * This function extract keywrods from an object or string.
 *
 * @param {string,object,array} input - can be string, an object or an array of strings.
 * @param {object} options- various configurable options
 * @returns {array} - Returns array of keywords
 *
 * @example
 * extract("hello world"); // returns h, he, hel, hell, hello, w, wo, wor, worl, world
 *
 *
 * @example
 * extract(["hello world", "hello"]); // returns h, he, hel, hell, hello, w, wo, wor, worl, world
 * 
 * @example
 * extract({name: "hello world", description: "hello"}); // returns h, he, hel, hell, hello, w, wo, wor, worl, world
 * 
 * @param options
 * options.minWordLength - minimum length of word to be extracted
 * options.skipDigits - skip digits from extraction
 * options.skipSpecialCharacters - skip special characters from extraction
 * options.skipStopWords - skip stop words from extraction
 * options.stopWords - custom stop words
 * 
 */
const stopwords = [
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by',
  'can', 'could',
  'did', 'do', 'does', 'doing', 'down', 'during',
  'each',
  'few', 'for', 'from', 'further',
  'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his', 'how',
  'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself',
  'just',
  'me', 'more', 'most', 'my', 'myself',
  'no', 'nor', 'not', 'now',
  'of', 'off', 'on', 'once', 'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
  'same', 'she', 'should', 'so', 'some', 'such',
  'than', 'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too',
  'under', 'until', 'up',
  'very',
  'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'with', 'would',
  'you', 'your', 'yours', 'yourself', 'yourselves'
];

 export const extract = (input, options = {}) => {
  const {
    minWordLength = 3,
    skipDigits = true,
    skipSpecialCharacters = true,
    skipStopWords = true,
    stopWords = stopwords,
    asItIs = null,
    keys = null
  } = options;

  let words, fixedWords = [];
  if (Array.isArray(input)) {
    words = input;
  } else if (typeof input === 'object') {
    words = Array.isArray(keys) ? keys.map(key => input[key]) : Object.values(input);
    fixedWords = Array.isArray(asItIs) ? Object.keys(input).filter(key => asItIs.includes(key)).map(key => input[key]) : [];
  } else {
    words = [input]
  }
  const regex = skipSpecialCharacters ? /\w+/g : /./g;
  const allSubstrings = words.flatMap(word => word.toString().toLowerCase().match(regex));
   
  return [...new Set(allSubstrings
    .filter(word => !(skipDigits && /\d/.test(word)))
    .filter(word => !(skipStopWords && stopWords.includes(word)))
    .flatMap(word => Array.from({length: word.length}, (_, i) => word.slice(0, word.length - i)))
    .filter(word => word.length >= minWordLength)), ...fixedWords];
}
