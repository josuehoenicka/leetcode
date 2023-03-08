# You can see the challenge prompt at the following link below:
# https://leetcode.com/problems/palindrome-number/description/

class Solution:
    def isPalindrome(self, x: int) -> bool:
        str_x = str(x)
        return str_x == str_x[::-1]
    
sol = Solution();
result = sol.isPalindrome(121);
print(result); # true