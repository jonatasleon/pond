var right = true;
var angle = 0;
var range;

while(loc_x() < 50) {
  swim(0);
}

while(loc_y() > 50) {
  swim(270);
}


while(true) {
  
  if(loc_x() <= 90 && right) {
    swim(0);
  } else if(!(right = !(loc_x() >= 10))) {
    swim(180);
    right = false;
  } else {
    right = true;
  }
  
  superScan(angle+=15);
}

function superScan(angle) {
  var aux = 0;
  var range;
  while(aux <= 360) {
    range = scan(angle + aux);
    if(range <= 70)
      cannon(angle + aux , range);
    aux += 90;
  }
}

