function consecutiveSubstrings(string) {
  if (string.length === 1){ return [string]; }

  const res = [];
  for (let i=0; i<string.length; i++){
    res.push(string.slice(0,i+1));
  }
  
  return [...res, ...consecutiveSubstrings(string.slice(1))];
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['a', 'aa', 'a']");
  console.log("=>", consecutiveSubstrings('aa'));

}

module.exports = consecutiveSubstrings;

/**
 * 1. paraphrase
 * 
 * give an string >= 1 char, return array of all consecutive substrings
 * 
 * 2. tests
 * 
 * "aa"
 * 
 * 3. pseudocode
 * 
 * use recursion with returning single char as base case
 * iterate over string, returning first, then first/second, etc.
 * and then also return recursive call on substring string.shift()
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 */
