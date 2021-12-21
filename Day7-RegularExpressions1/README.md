# Day 7: Regular Expressions I

## Problem

### Objective

<p>In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.</p>

### Task

<p>Complete the function in the editor below by returning a RegExp object, <b><i>re</i></b> , that matches any string <b><i>s</i></b> that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.</p>

### Constraints

- The length of string <b><i>s</i></b> is <b>≥ 3</b>.
- String <b><i>s</i></b> consists of lowercase letters only (i.e., [a-z]).

### Output Format

<p>The function must return a RegExp object that matches any string <b><i>s</i></b> beginning with and ending in the same vowel.</p>

### Sample Input 0

```
bcd
```

### Sample Output 0

```
false
```

### Explanation 0

<p>This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.</p>

### Sample Input 1

```
abcd
```

### Sample Output 1

```
false
```

### Explanation 1

<p>This string ends in a consonant, so it cannot start and end with the same vowel.</p>

### Sample Input 2

```
abcda
```

### Sample Output 2

```
abcda
```

### Explanation 2

<p>This string starts and ends with the same vowel (a).</p>

### Sample Input 3

```
abcdo
```

### Sample Output 3

```
false
```

### Explanation 3

<p>This string starts with the vowel a but ends in the vowel o.</p>
