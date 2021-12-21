# Day 6: JavaScript Dates

## Problem

### Objective

<p>In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.</p>

### Task

<p>Given a date string, <b><i>dateString</i></b> , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.</p>

### Input Format

<p>Locked stub code in the editor reads the following input from stdin:</p>
<p>The first line contains an integer, <b><i>d</i></b> , denoting the number of dates to check.</p>
<p>Each line <b><i>i</i></b> of the <b><i>d</i></b> subsequent lines contains a date in MM/DD/YYYY format; each date denotes some <b><i>dateString</i></b> that is passed to the function.</p>

### Constraints

- It is guaranteed that the input only consists of valid dates.

### Output Format

<p>The function must return a string denoting the day of the week corresponding to the date denoted by <b><i>dateString</i></b>.</p>

### Sample Input 0

```
2
10/11/2009
11/10/2010
```

### Sample Output 0

```
Sunday
Wednesday
```

### Explanation 0

<p>The function is called for the following <b><i>d</i></b> = <b>2</b> dates:</p>

1. The date 10/11/2009 was a Sunday, so we return Sunday.
2. The date 11/10/2010 was a Wednesday, so we return Wednesday.
