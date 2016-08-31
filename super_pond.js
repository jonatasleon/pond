var right = true;
var angle = 0;
var range;
var aux;

while(loc_x() < 50) {
  swim(0);
  superScan(angle+=5);
}

while(loc_y() > 50) {
  swim(270);
  superScan(angle+=5);
}


while(true) {
  
  if(loc_x() <= 90 && right) {
    swim(0);
  } else if(!(right = (loc_x() < 10))) {
    swim(180);
    right = false;
  } else {
    right = true;
  }
  
  aux = 0;
  
  superScan(angle+=5);
}

function superScan(angle) {
  var aux = 0;
  var range;
  
  range = scan(angle + aux);
  if(range <= 70)
    cannon(angle + aux , range);
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70)
    cannon(angle + aux , range);
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70)
    cannon(angle + aux , range);
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70)
    cannon(angle + aux , range);
  aux += 90;
}
