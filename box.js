class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.dustbin	= loadImage('images/dustbingreen.png');
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
      imageMode(CENTER);
      image(this.dustbin,650,564,200,200);
    }
  }
  