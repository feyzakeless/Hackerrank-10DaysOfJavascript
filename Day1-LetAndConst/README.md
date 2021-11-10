# Day 1: Let and Const

## Problem

### Objective

<p>In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.</p>

### Task

1. Declare a constant variable, <b>PI</b> , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, <b>r</b> , denoting the radius of a circle from stdin.
3. Use <b>PI</b> and <b>r</b> to calculate the <b><i>area</i></b> and <b><i>perimeter</i></b> of a circle having radius <b>r</b>.
4. Print <b><i>area</i></b> as the first line of output and print <b><i>perimeter</i></b> as the second line of output.

### Input Format

<p>A single integer, <b>r</b> , denoting the radius of a circle.</p>

### Constraints

- 0 < <i>r</i> ≤ 100
- <b>r</b> is a floating-point number scaled to at most <b>3</b> decimal places.

### Output Format

<p>Print the following two lines:</p>

1. On the first line, print the <b><i>area</i></b> of the circle having radius <b>r</b>.
2. On the second line, print the <b><i>perimeter</i></b> of the circle having radius <b>r</b>.

### Sample Input 0

```
2.6
```

### Sample Output 0

```
21.237166338267002
16.336281798666924
```

### Explanation 0

<p>Given the radius <b>r</b> = <b>2.6</b> , we calculate the following:</p>

- <b><i>area</i></b> = <b> π \* r² </b> = <b>21.237166338267002</b>
- <b><i>perimeter</i></b> = <b> 2 \* π \* r </b> = <b>16.336281798666924</b>

<p>We then print <b><i>area</i></b> as our first line of output and <b><i>perimeter</i></b> as our second line of output.</p>
