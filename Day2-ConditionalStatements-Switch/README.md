# Day 2: Conditional Statements: Switch

## Problem

### Objective

<p>In this challenge, we learn about switch statements. Check out the attached tutorial for more details.</p>

### Task

<p>Complete the getLetter(s) function in the editor. It has one parameter: a string, <b><i>s</i></b> , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:</p>

- If the first character in string <b><i>s</i></b> is in the set <b><i>{a, e, i, o ,u}</i></b>, then return A.
- If the first character in string <b><i>s</i></b> is in the set <b><i>{b, c, d, f, g}</i></b>, then return B.
- If the first character in string <b><i>s</i></b> is in the set <b><i>{h, j, k, l, m}</i></b>, then return C.
- If the first character in string <b><i>s</i></b> is in the set <b><i>{n, p , q, r, s, t, v, w, x, y, z}</i></b>, then return D.

<p><b>Hint:</b> You can get the letter at some index <b><i>i</i></b> in <b><i>s</i></b> using the syntax s[i] or s.charAt(i).</p>

### Function Description

<p>Complete the getLetter function in the editor below.</p>
<p>getLetter has the following parameters:</p>

- string s: a string

### Returns

- string: a single letter determined as described above

### Input Format

<p>Stub code in the editor reads a single string denoting <b><i>s</i></b> from stdin.</p>

### Constraints

- 1 ≤ <b><i>|s|</i></b> ≤ 100 , , where <b><i>|s|</i></b> is the length of <b><i>s</i></b>.
- String <b><i>s</i></b> contains lowercase English alphabetic letters (i.e., a through z) only.

### Sample Input 0

```
adfgt
```

### Sample Output 0

```
A
```

### Explanation 0

<p>The first character of string <b><i>s</i></b> = <b>adfgt</b> is a. Because the given criteria stipulate that we print A any time the first character is in <b><i>{a, e, i, o ,u}</i></b>, we return A as our answer.</p>
