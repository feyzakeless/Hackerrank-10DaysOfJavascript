# Day 7: Regular Expressions III

## Problem

### Task

<p>Complete the function in the editor below by returning a RegExp object, <b><i>re</i></b> , that matches every integer in some string <b><i>s</i></b>.</p>

### Constraints

- The length of string <b><i>s</i></b> is <b>≥ 3</b>.
- It's guaranteed that string <b><i>s</i></b> contains at least one integer.

### Output Format

<p>The function must return a RegExp object that matches every integer in some string <b><i>s</i></b>.</p>

### Sample Input 0

```
102, 1948948 and 1.3 and 4.5
```

### Sample Output 0

```
102
1948948
1
3
4
5
```

### Explanation 0

<p>When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].</p>

### Sample Input 1

```
1 2 3
```

### Sample Output 1

```
1
2
3
```

### Explanation 1

<p>When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '1', '2', '3' ].</p>
