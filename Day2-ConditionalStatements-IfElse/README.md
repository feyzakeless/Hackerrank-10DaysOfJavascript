# Day 2: Conditional Statements: If-Else

## Problem

### Objective

<p>In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.</p>

### Task

<p>Complete the getGrade(score) function in the editor. It has one parameter: an integer, <b><i>score</i></b> , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her <b><i>grade</i></b> according to the following rules:</p>

- If <b>25</b> < <b><i>score</i></b> ≤ <b>30</b> , then <b><i>grade</i></b> = <b><i>A</i></b>.
- If <b>20</b> < <b><i>score</i></b> ≤ <b>25</b> , then <b><i>grade</i></b> = <b><i>B</i></b>.
- If <b>15</b> < <b><i>score</i></b> ≤ <b>20</b> , then <b><i>grade</i></b> = <b><i>C</i></b>.
- If <b>10</b> < <b><i>score</i></b> ≤ <b>15</b> , then <b><i>grade</i></b> = <b><i>D</i></b>.
- If <b>5</b> < <b><i>score</i></b> ≤ <b>10</b> , then <b><i>grade</i></b> = <b><i>E</i></b>.
- If <b>0</b> ≤ <b><i>score</i></b> ≤ <b>5</b> , then <b><i>grade</i></b> = <b><i>F</i></b>.

### Input Format

<p>Stub code in the editor reads a single integer denoting  <b><i>score</i></b> from stdin and passes it to the function.</p>

### Constraints

- 0 ≤ <b><i>score</i></b> ≤ 30

### Output Format

<p>The function must return the value of <b><i>grade</i></b> (i.e., the letter grade) that Julia earned on the exam.</p>

### Sample Input 0

```
11
```

### Sample Output 0

```
D
```

### Explanation 0

<p>Because <b><i>score</i></b> = 11, it satisfies the condition 10 < <b><i>score</i></b> ≤ 15 (which corresponds to D). Thus, we return D as our answer.</p>
