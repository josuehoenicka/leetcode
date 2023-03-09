# You can see the challenge prompt at the following link below:
# https://leetcode.com/problems/roman-to-integer/description/

def roman_to_int(s: str) -> int:
    roman_to_int_map = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000,
    }
    result = 0
    for i in range(len(s)):
        current_char_value = roman_to_int_map[s[i]]
        next_char_value = roman_to_int_map[s[i+1]] if i+1 < len(s) else 0
        if current_char_value < next_char_value:
            result -= current_char_value
        else:
            result += current_char_value
    return result

print(roman_to_int("MCMXCIV")) #1994