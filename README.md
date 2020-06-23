# double_direction_slideshow
You can move horizontally and vertically in the slideshow


## Get Started
First, call the files in head

```html
<head>
  <link href="css/db_slideshow_style.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="js/db_slideshow.js"></script>
</head>
```


Adding ```double_direction_slideshow``` div into our body and place four navigation buttons into it.

```html
<div class="double_direction_slideshow">
  <button class="nav-button left"><img src="images/btn-left.png"></button>
  <button class="nav-button top"><img src="images/btn-top.png"></button>
  <button class="nav-button right"><img src="images/btn-right.png"></button>
  <button class="nav-button bottom"><img src="images/btn-bottom.png"></button>
</div>
```

## Adding Javascript
```javascript
<script>
let images = [
  "https://i.ibb.co/dL0rjZb/hatter5.jpg",
  "https://i.ibb.co/1MkR9LN/hatter4.jpg",
  "https://i.ibb.co/mhhKxP5/hatter3.jpg",
  "https://i.ibb.co/tzX7Vs7/hatter2.jpg",
  "https://i.ibb.co/2tVWW8H/hatter1.jpg",
  "https://i.ibb.co/bXPYc01/hatter0.jpg",
  "https://i.ibb.co/h8J5kxx/hatter31.jpg",
  "https://i.ibb.co/pzH5pQ3/hatter30.jpg",
  "https://i.ibb.co/1T6DfjM/hatter29.jpg",
  "https://i.ibb.co/w4yK5Mg/hatter28.jpg"
];

Double_Slideshow_print(10, 5, images);
</script>
```
You can use ```Double_Slideshow_print(piece, columns, images)``` to call the function. Just pass the images array and you can set how many images you want to show.
In different device sizes, you can call the function with different numbers so you can keep the images aspect ratio.

[Demo here](https://codepen.io/Balint_Gacsfalvy/pen/VwepVWd)
