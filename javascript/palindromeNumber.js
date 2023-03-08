// You can see the challenge prompt at the following link below:
// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {
    const numString = x.toString();
    const reversedString = numString.split('').reverse().join('');
    return numString === reversedString;
};

console.log(isPalindrome(202)); // true