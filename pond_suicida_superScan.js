var range;
var angle = 0;
var nAngle;

while(true) {
  var res = superScan(angle);
  
  if(res.found)
    angle = res.angle;
  else
    angle += 5;
    
  swim(angle);
}

function superScan(angle) {
  var aux = 0;
  var range;
  var angleRight = angle;
  
  var res = {};
  res.found = false;
  
  range = scan(angle + aux);
  if(range <= 70) {
    cannon(angle + aux , range);
    res.found = true;
    res.angle = angle + aux;
  }
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70) {
    cannon(angle + aux , range);
    res.found = true;
    res.angle = angle + aux;
  }
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70) {
    cannon(angle + aux , range);
    res.found = true;
    res.angle = angle + aux;
  }
  aux += 90;
  
  range = scan(angle + aux);
  if(range <= 70) {
    cannon(angle + aux , range);
    res.found = true;
    res.angle = angle + aux;
  }
  aux += 90;
  
  return res;
}

function min(n1, n2) {
  return (n1 < n2) ? n1 : n2;
}
