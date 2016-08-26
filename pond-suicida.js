var angle = 0;
var range1;
var range2;
var range3;
var range4;
var dir = 1;

var shoot;

while(true) {
  range1 = scan(angle);
  range2 = scan(angle * -1);
  range3 = scan(angle + 180);
  range4 = scan((angle + 180) * -1);
  
  if (!found(range1, range2, range3, range4))
    angle += 5;
  else {
    shoot = calcAngle([range1, range2, range3, range4], angle);
    angle = shoot.angle;
    cannon(angle, shoot.range);
    swim(angle, 100);
  }
}

function found() {
  var ranges = arguments;
  var i = ranges.length;
  var found = false;
  while(--i) {
    found = found || (ranges[i] !== Infinity);
  }
  return found;
}

function calcAngle (ranges, angle) {
  var index = 0;
  var length = ranges.length;
  var bestRange = ranges[index];
  var aux = index;
  
  var angles = {
    0: angle,
    1: angle * -1,
    2: angle + 180,
    3: (angle + 180) * -1
  };
  
  while(index + 1 < length) {
    if(ranges[aux] > ranges[index + 1]) {
      bestRange = ranges[index + 1] ;
      aux = index + 1;
    }
    index++;
  }
  
  return {angle: angles[aux], range: ranges[aux]};
}
