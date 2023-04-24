function consecutiveSubstrings(s) {
  const res = [];
  const len = s.length;
  for (let i=0; i<len; i++) {
    // base case
    if (i===len-1) {
      res.push(s[len-1]);
    }
    else if (len > 0) {
      // ab ['a', ]
      for (let j=i+1; j<=len; j++) {
        res.push(s.slice(i,j))
      }
    }
  }

  return res;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log(consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['a', 'aa', 'a']");
  console.log("=>", consecutiveSubstrings('aa'));

}

module.exports = consecutiveSubstrings;

/**
 *    abcd
 *    a, ab, abc, abcd
 *    b, bc, bcd
 *    c, cd
 *    d
 * 
 *    needs: 2 pointers (nested for loops will do)
 */
