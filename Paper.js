class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.0,
			friction:0.5,
			density:0.1

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
        this.image = loadImage("Images/paper.png")

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			
			//strokeWeight(4);
            imageMode(CENTER)
            
            image(this.image,0,0,this.r,this.r)

			
			pop()  
			
	}

}