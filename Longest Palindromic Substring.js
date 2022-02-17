// Palindrome Meaning: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const LongestPalindromicSubstring = function (s) {
  let palindromes = [];
  if (s.length <= 1) {
    return s.length;
  }

  for (let i = 0; i < s.length; i++) {
    j = 0;
    k = 0;
    while (s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
      j++;
    }
    palindromes.push(s.slice(i - (j - 1), i + j)); //even palindromes
    j = 0;
    while (s[i + 1 + k] === s[i - k] && s[i + 1 + k] && s[i - k]) {
      k++;
    }
    palindromes.push(s.slice(i - (k - 1), i + 1 + k)); //odd palindromes
    k = 0;
  }
  return palindromes.sort((a, b) => {
    return b.length - a.length;
  })[0];
};
