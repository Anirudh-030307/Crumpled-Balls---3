class Dustbin {
    constructor(x, y) {
      var options = {
        isStatic: true   
      }

      this.body = Bodies.rectangle(x, y, 70,70, options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
      this.dustbin	= loadImage('images/dustbingreen.png');
    }
    
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.dustbin,650,650,80,100);
      pop();
    }
  }
  