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
