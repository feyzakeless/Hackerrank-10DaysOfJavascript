# Day 4: Classes

## Problem

### Objective

<p>In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.</p>

### Task

<p>Create a Polygon class that has the following properties:</p>

- A constructor that takes an array of integer values describing the lengths of the polygon's sides.
- A perimeter() method that returns the polygon's perimeter.
<p>Locked code in the editor tests the Polygon constructor and the perimeter method.</p>

<p><b>Note:</b> The perimeter method must be lowercase and spelled correctly.</p>

### Input Format

<p>There is no input for this challenge.</p>

### Output Format

<p>The perimeter method must return the polygon's perimeter using the side length array passed to the constructor.</p>

### Explanation

<p>Consider the following code:</p>

```
// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
```

<p>When executed with a properly implemented Polygon class, this code should print the result of <b>3+4+5=12</b>.</p>
