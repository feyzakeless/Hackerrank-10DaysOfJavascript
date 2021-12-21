# Day 7: Regular Expressions II

## Problem

### Task

<p>Complete the function in the editor below by returning a RegExp object, <b><i>re</i></b> , that matches any string <b><i>s</i></b> satisfying both of the following conditions:</p>

- String <b><i>s</i></b> starts with the prefix Mr., Mrs., Ms., Dr., or Er.
- The remainder of string <b><i>s</i></b> (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

### Constraints

- The length of string <b><i>s</i></b> is <b>≥ 3</b>.

### Output Format

<p>The function must return a RegExp object that matches any string <b><i>s</i></b> satisfying both of the given conditions.</p>

### Sample Input 0

```
Mr.X
```

### Sample Output 0

```
true
```

### Explanation 0

<p>This string starts with Mr., followed by an English alphabetic letter (X).</p>

### Sample Input 1

```
Mrs.Y
```

### Sample Output 1

```
true
```

### Explanation 1

<p>This string starts with Mrs., followed by an English alphabetic letter (Y).</p>

### Sample Input 2

```
Dr#Joseph
```

### Sample Output 2

```
false
```

### Explanation 2

<p>This string starts with Dr# instead of Dr., so it's invalid.</p>

### Sample Input 3

```
Er .Abc
```

### Sample Output 3

```
false
```

### Explanation 3

<p>This string starts with Er but there is a space before the period (.), making the string invalid.</p>
