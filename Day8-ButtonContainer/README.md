# Day 8: Buttons Container

## Problem

### Objective

<p>In this challenge, we lay out buttons inside a div and modify their labels after each click event on one of the buttons. Check out the attached tutorial for learning materials.</p>

### Task

<p>We want to create nine buttons enclosed in a div, laid out so they form a 3x3 grid. Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.
<br>
Complete the code in the editor so that it satisfies the following criteria:
</p>

- Initial State. The initial layout looks like this:
  <div align="center">

  ![layoutImage](https://s3.amazonaws.com/hr-challenge-images/0/1456631615-634977c808-ScreenShot2016-02-28at9.22.14AM.png)

</div>

- Element IDs. Each element in the document must have an id, specified below:

  - The button container div's id must be btns.
  - The initial innerHTML labels must have the following button ids:
  <table class="challenge-body-table" align="center">
      <thead>
      <tr>
      <th align="center"><code>innerHTML</code></th>
      <th align="center"><code>id</code></th>
      </tr>
      </thead>
      <tbody><tr>
      <td align="center"><code>1</code></td>
      <td align="center"><code>btn1</code></td>
      </tr>
      <tr>
      <td align="center"><code>2</code></td>
      <td align="center"><code>btn2</code></td>
      </tr>
      <tr>
      <td align="center"><code>3</code></td>
      <td align="center"><code>btn3</code></td>
      </tr>
      <tr>
      <td align="center"><code>4</code></td>
      <td align="center"><code>btn4</code></td>
      </tr>
      <tr>
      <td align="center"><code>5</code></td>
      <td align="center"><code>btn5</code></td>
      </tr>
      <tr>
      <td align="center"><code>6</code></td>
      <td align="center"><code>btn6</code></td>
      </tr>
      <tr>
      <td align="center"><code>7</code></td>
      <td align="center"><code>btn7</code></td>
      </tr>
      <tr>
      <td align="center"><code>8</code></td>
      <td align="center"><code>btn8</code></td>
      </tr>
      <tr>
      <td align="center"><code>9</code></td>
      <td align="center"><code>btn9</code></td>
      </tr>
      </tbody>
  </table>

- Styling. The document's elements must have the following styles:
_ The width of btns is 75%, relative to the document body's width.
_ Each button (i.e., btn1 through btn9) satisfies the following:
_ The width is 30%, relative to its container width.
_ The height is 48px.
_ The font-size is 24px.
_ Behavior. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.
<br>
<p>The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:</p>

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css" />
  </head>

  <body>
    <script src="js/buttonsGrid.js" type="text/javascript"></script>
  </body>
</html>
```

<br>

### Explanation

<p>Initially, the buttons look like this:</p>
<div align="center">

![image1](https://s3.amazonaws.com/hr-challenge-images/0/1456632368-64062011d3-ScreenShot2016-02-28at9.22.14AM.png)

</div>
<br>
<p>After clicking btn5 1 time, they look like this:</p>
<div align="center">

![image1](https://s3.amazonaws.com/hr-challenge-images/0/1456632450-3cda1c5938-ScreenShot2016-02-28at9.37.00AM.png)

</div>
<br>
<p>After clicking btn5 1 more time (for a total of 2 clicks), they look like this:</p>
<div align="center">

![image1](https://s3.amazonaws.com/hr-challenge-images/0/1456632516-9a0d9cef8a-ScreenShot2016-02-28at9.38.04AM.png)

</div>
