var shoot = {range: Infinity, angle: 0};
var direction = {angle: 0, speed: 0};
var status = {};
status.life = health();
status.preLife = status.life;
status.loseLife = function() {
  return this.preLife > this.life;
}

while(true) {
  shoot.range = scan(shoot.angle);
  swim(shoot.angle + status.loseLife() ? 180 : 0, shoot.range > 15 ? 100 : 0);
  
  if(shoot.range === Infinity || shoot.range > 70) {
    shoot.angle += 5 * rotation();
  } else {
    cannon(shoot.angle, shoot.range);
    shoot = calcAlternatives(shoot);
  }
  
  status.preLife = status.life;
}

function rotation() {
  var option;
  var coord = {};
  
  var horario = function() {
    return 1;
  };
  
  var antiHorario = function() {
    return -1;
  };
  
  var q = {
    1: antiHorario,
    2: horario,
  };
  
  if(coord.x < 50 && coord.y < 50 || coord.x > 50 && coord.y > 50 )
    option = 1;
  else
    option = 2;
    
  return q[option]();
}

function calcAlternatives(shoot) {
  var cosShoot = calcShoot(shoot, Math.cos_deg);
  var sinShoot = calcShoot(shoot, Math.sin_deg);
  var tanShoot = calcShoot(shoot, Math.tan_deg);
  
  return bestShoot([shoot, cosShoot, sinShoot, tanShoot]);
}

function calcShoot(shoot, fn) {
  var newShoot = {};
  
  newShoot.angle = fn(shoot.angle) * shoot.angle;
  newShoot.range = scan(newShoot.angle);
  
  return newShoot;
}

function bestShoot(shoots) {
  var i = shoots.length;
  var currentShoot = shoots[i - 1];

  while(i--) {
    if(currentShoot.range > shoots[i].range)
      currentShoot = shoots[i];
  }

  return currentShoot;
}