# Day 3: Try, Catch, and Finally

## Problem

### Objective

<p>In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.</p>

### Task

<p>Complete the reverseString function; it has one parameter, <b><i>s</i></b>. You must perform the following actions:</p>

1. Try to reverse string <b><i>s</i></b> using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's <b><i>message</i></b> on a new line.
3. Print <b><i>s</i></b> on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

### Input Format

<p>Locked stub code in the editor reads variable <b><i>s</i></b> from stdin and passes it to the function.</p>

### Output Format

<p>You must write two print statements using console.log():</p>

1. Print the contents of a caught exception's <b><i>message</i></b> on a new line. If no exception was thrown, this line should not be printed.
2. Print <b><i>s</i></b> on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

### Sample Input 0

```
"1234"
```

### Sample Output 0

```
4321
```

### Explanation 0

<p> <b><i>s</i></b> = <b>"1234"</b> is a string type, so it can be reversed without throwing an exception. Thus, we print the reversed value, 4321, as our answer.</p>

### Sample Input 1

```
Number(1234)
```

### Sample Output 1

```
s.split is not a function
1234
```

### Explanation 1

<p> <b><i>s</i></b> = <b>Number(1234)</b>  is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, it throws an exception. We then catch the exception and print its <b><i>message</i></b>, which is s.split is not a function. Next, we finally print  <b><i>s</i></b> which, because it wasn't able to be reversed, is Number(1234).</p>
