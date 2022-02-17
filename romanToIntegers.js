var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let ans = 0;
  let i = 0;

  let length = s.length;

  if (length === 1) {
    return map[s.charAt(0)];
  }

  for (i = 0; i < length - 1; i++) {
    const currentChar = s.charAt(i);
    const nextChar = s.charAt(i + 1);

    const char_2 = map[currentChar + nextChar];
    if (char_2) {
      ans = ans + char_2;
      i++;
      if (i == length - 1) {
        return ans;
      }
    } else {
      ans = ans + map[currentChar];
    }
  }
  return ans + map[s.charAt(length - 1)];
};
