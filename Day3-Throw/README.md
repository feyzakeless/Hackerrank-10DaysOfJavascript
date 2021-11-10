# Day 3: Throw

## Problem

### Objective

<p>In this challenge, we practice using throw and catch statements to work with custom error messages.</p>

### Task

<p>Complete the isPositive function below. It has one integer parameter, <b><i>a</i></b>. If the value of <b><i>a</i></b> is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:</p>

1. If <b><i>a</i></b> is <b><i>0</i></b>, throw an Error with <b><i>message</i></b> = Zero Error.
2. If <b><i>a</i></b> is negative, throw an Error with <b><i>message</i></b> = Negative Error.

### Input Format

<p>Locked stub code in the editor reads the following input from stdin and passes each value of <b><i>a</i></b> to the function as an argument:</p>
<p>The first line is an integer, <b><i>n</i></b>, denoting the number of times the function will be called with some <b><i>a</i></b>.</p>
<p>Each line <b><i>i</i></b> of the <b><i>n</i></b> subsequent lines contains an integer denoting some <b><i>a</i></b>.</p>

### Constraints

- 1 ≤ <b><i>n</i></b> ≤ 5
- -100 ≤ <b><i>a</i></b> ≤ 100

### Output Format

<p>If the value of <b><i>a</i></b> is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:</p>

1. If <b><i>a</i></b> is <b><i>0</i></b>, throw an Error with <b><i>message</i></b> = Zero Error.
2. If <b><i>a</i></b> is negative, throw an Error with <b><i>message</i></b> = Negative Error.

### Sample Input 0

```
3
1
2
3
```

### Sample Output 0

```
YES
YES
YES
```

### Explanation 0

<p> Each of the given values is positive, so we return YES each time. The value returned during each function call is printed on a new line by locked stub code in the editor.</p>

### Sample Input 1

```
3
2
0
6
```

### Sample Output 1

```
YES
Zero Error
YES
```

### Explanation 1

<p>Locked stub code in the editor makes the following three calls to the isPositive function:</p>

1. isPositive(2): This returns YES because <b>2</b> is positive.
2. isPositive(0): Because <b><i>a</i></b> = <b>0</b>, we throw an Error with <b><i>message</i></b> = Zero Error. This is caught by the locked stub code and the value of its <b><i>message</i></b> is printed.
3. isPositive(6): This returns YES because <b>6</b> is positive.

### Sample Input 2

```
2
-1
20
```

### Sample Output 2

```
Negative Error
YES
```

### Explanation 2

<p>Locked stub code in the editor makes the following two calls to the isPositive function:</p>

1. isPositive(-1): Because <b><i>a</i></b> = <b>-1</b>, we throw an Error with <b><i>message</i></b> = Negative Error. This is caught by the locked stub code and the value of its <b><i>message</i></b> is printed.
2. isPositive(20): This returns YES because <b>20</b> is positive.
