var angle = 0;
var ranges;
var dir = 1;

var shoot;

while(true) {
  ranges = scans(angle);

  if (!found(ranges))
    angle += 5;
  else {
    shoot = calcAngle(ranges, angle);
    angle = shoot.angle;
    cannon(angle, shoot.range);
    swim(angle, 100);
  }
}

function scans(angle) {
  var ranges = [];
  ranges.push(scan(angle));
  ranges.push(scan(angle * -1));
  ranges.push(scan(angle + 180));
  ranges.push(scan((angle + 180) * -1));
  return ranges;
}

function found(ranges) {
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
