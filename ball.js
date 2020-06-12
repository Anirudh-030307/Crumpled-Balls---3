class Ball {
    constructor(x, y) {
      var options = {
      'isStatic': false,
		  'restitution':0,
		  'friction':1.5,
		  'density':0.2
      }

      this.body = Bodies.rectangle(x, y, 110,110, options);
      this.width = 110;
      this.height = 110;
      World.add(world, this.body);
      this.paper=loadImage('images/paper.png'); 
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      image(this.paper,0,0,70,70)
      pop();
    }

  }
  