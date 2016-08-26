var angle = 0;
var range;
var dir = 1;

while(true) {
  range = scan(angle);
  swim(angle, 100);
  
  if (range === Infinity)
    angle += 5;
  else
    cannon(angle, range);
}