// You can see the challenge prompt at the following link below:
// https://leetcode.com/problems/roman-to-integer/description/

var romanToInt = function(s) {
    const romanToIntMap = {
      "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000,
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const currentCharValue = romanToIntMap[s[i]];
      const nextCharValue = romanToIntMap[s[i+1]];
      if (nextCharValue && currentCharValue < nextCharValue) {
        result -= currentCharValue;
      } else {
        result += currentCharValue;
      }
    } 
    return result;
};

console.log("MCMXCIV") // 1994
  