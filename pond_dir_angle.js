var angle = 0;
var range;

var pos = {};

pos.x = loc_x();
pos.y = loc_y();

while(true) {
  range = scan(angle+=5);
  
  if(range <= 70)
    cannon(angle, range);
  
  swim(Math.atan_deg((loc_y() - pos.y / (loc_x() - pos.x))));
}
