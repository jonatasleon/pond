var angle = 0;
var ranges;
var dir = 1;

var shoot;

while(true) {
  ranges = rangesByAngle(angle);
  
  if (!found(ranges))
    angle += 5;
  else {
    shoot = calcAngle(ranges, angle);
    angle = shoot.angle;
    cannon(angle, shoot.range);
    swim(angle, 100);
  }
}

function found(ranges) {
  var i = ranges.length;
  var found = false;
  while(--i) {
    found = found || (ranges[i] !== Infinity);
  }
  return found;
}

function rangesByAngle(angle) {
  var i = 0;
  var ranges = [];
  
  var angles = {
    0: angle,
    1: angle * -1,
    2: angle + 180,
    3: (angle + 180) * -1
  };
  
  while(i < 4)
    ranges.push(scan(angles[i++]));
  
  return ranges;
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
