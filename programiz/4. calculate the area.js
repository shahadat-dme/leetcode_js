/*
// Area When Base and Height is Known
// area = (base * height) / 2
const baseValue = 4;
const heightValue = 6;

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
*/


// JavaScript program to find the area of a triangle
/*
s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))
*/

const side1 = 4;
const side2 = 6;
const side3 = 8;

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);
