class Car{

    constructor(x,y,width,height){

        // For Location / Position
        this.x = x;
        this.y = y;

        // For Size
        this.width = width;
        this.height = height;

    }

    draw(ctx){

        // We will draw a Car as a simple Rectangle for now.
        ctx.beginPath();

        ctx.rect(
         
            // Drawing Rectangle at Center about x & y.
            this.x - this.width / 2,
            this.y - this.height / 2,
            // this.x,
            // this.y,
            this.width,
            this.height

        );

        // ctx.rect(
         
        //     this.x,
        //     this.y,
        //     this.width,
        //     this.height

        // );

        ctx.fill();

    }
}