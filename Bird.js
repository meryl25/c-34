class Ball{
  constructor(x,y,r){
    this.r=r
    this.body=Bodies.circle(x,y,r)
    World.add(world,this.body)
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill ("white")
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}