/**
 * 10. Regular Expression Matching
 * 
 * Given an input string str and a pattern pattern, implement regular expression 
 * matching with support for '.' and '*' where:
 *
 *  '.' Matches any single character.​​​​
 *  '*' Matches zero or more of the preceding element.
 *  The matching should cover the entire input string (not partial).

 $ Example 1:
 *  Input: str = "aa", pattern = "a"
 *  Output: false
 *  Explanation: "a" does not match the entire string "aa".

 $  Example 2:
 *  Input: str = "aa", pattern = "a*"
 *  Output: true
 *  Explanation: '*' means zero or more of the preceding element, 
 *  'a'. Therefore, by repeating 'a' once, it becomes "aa".
 
 $  Example 3:
 *  Input: str = "ab", pattern = ".*"
 *  Output: true
 *  Explanation: ".*" means "zero or more (*) of any character (.)".
*/

// aaabcccdwwwwd | a*b.c*.w*.

/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
*/
function isMatch(s, p) {
    const dp = new Array(s.length + 1)
                .fill(false)
                .map(() => new Array(p.length + 1)
                .fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];

            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && 
                        (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    return dp[s.length][p.length];
}

const tc = isMatch('aa', 'a*');
console.log(!!tc)