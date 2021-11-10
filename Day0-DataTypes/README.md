# Day 0: Data Types

## Problem

### Objective

<p>Today, we're discussing data types. Check out the attached tutorial for more details.</p>

### Task

<p>Variables named , <i>firstInteger</i> , <i>firstDecimal</i> and <i>firstString</i> are declared for you in the editor below. You must use the + operator to perform the following sequence of operations:
</p>

1. Convert <i>secondInteger</i> to an integer (Number type), then sum it with <i>firstInteger</i> and print the result on a new line using console.log.

2. Convert <i>secondDecimal</i> to a floating-point number (Number type), then sum it with <i>firstDecimal</i> and print the result on a new line using console.log.

3. Print the concatenation of <i>firstString</i> and <i>secondString</i> on a new line using console.log. Note that <i>firstString</i> must be printed first.

### Input Format

<table class="challenge-body-table">
    <thead>
        <tr>
            <th>Data Type</th>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>string</code></td>
            <td><i>secondInteger</i></td>
            <td>The string representation of an integer you must sum with <i>firstInteger</i>.</td>
        </tr>   
        <tr>
            <td><code>string</code></td>
            <td><i>secondDecimal</i></td>
            <td>The string representation of a floating-point number you must sum with <i>firstDecimal</i>.</td>
        </tr> 
        <tr>
            <td><code>string</code></td>
            <td><i>secondString</i></td>
            <td>A string of one or more space-separated words you must append to <i>secondString</i>.</td>
        </tr> 
    </tbody>
</table>

### Output Format

<p>Print the following three lines of output:</p>

1. On the first line, print the sum of <i>firstInteger</i> and the integer representation of <i>secondInteger</i>.
2. On the second line, print the sum of <i>firstDecimal</i> and the floating-point representation of <i>secondDecimal</i>.
3. On the third line, print <i>firstString</i> concatenated with <i>secondString</i>. You must print <i>firstString</i> before <i>secondString</i>.

### Sample Input 0

```
12
4.32
is the best place to learn and practice coding!
```

### Sample Output 0

```
16
8.32
HackerRank is the best place to learn and practice coding!
```

### Explanation 0

<p>When we sum the integers <b>4</b> and <b>12</b>, we get the integer <b>16</b>.</p>
<p>When we sum the floating-point numbers <b>4.0</b> and <b>4.32</b>, we get <b>8.32</b>. When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.</p>
<p><b>You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above.</b></p>
