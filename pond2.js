var angle = 0;
var pos = 0;
var x, y;
var life, preLife;

var dir = -1;

var coord;

preLife = life = health();

while(true) {
  coord = {
    x: loc_x(),
    y: loc_y()
  };

  cannon(angle, (pos = scan(angle)));
  swim(calcAngle(coord, angle, found(pos)), 100);

  if(!found(pos))
    angle += 5;

  if(!isValidPosition(coord) || loseLife(preLife, life))
    angle += -175;
}

function isValidPosition(coord) {
  var limit = 7;
  return coord.x < limit || coord.x > 100 - limit
      || coord.y > limit || coord.y < 100 - limit;
}

function found(pos) {
  return pos !== Infinity;
}

function loseLife(preLife, life) {
  return preLife !== life;
}

function calcAngle(coord, angle, loc) {
  return loc ? cosOrSin(coord)(angle) * angle : angle;
}

function cosOrSin(coord) {
  return (coord.y >= 50) ? Math.cos_deg : Math.sin_deg;
}
