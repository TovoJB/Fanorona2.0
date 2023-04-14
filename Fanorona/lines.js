class lines{
    constructor( x , y , height/*hauteur*/,width/*largeur*/){
      this.width = width;
       this.height = height

       this.y=y
       this.x=x
       this.left=x-width/2+50; //0
       this.right=x+width/2;//450+450 = 900
       this.top=y-height/2+50; //250-250
       this.bottom=y+height/2;//250+250
        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};
        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight],
            [topLeft,topRight],
            [bottomLeft, bottomRight]
        ];

      this.tab=[]

      for (let i = 0; i <= 4; i++) {
        this.tab[i] = [];
      
        for (let j = 0; j <= 8; j++) {
          let p = new positions(this.left,this.right,this.top,this.bottom,i,j);
          this.tab[i][j] = p;
        }
      }
      for (let i = 0; i <= COLS-1; i++) {
        for (let j = 0; j <=ROWS-1; j++) {
            if(pariter(i,j)){
            for( let direction of DIRECTIONS1){
                if(isValidSquare(direction.x+this.tab[i][j].i ,direction.y+this.tab[i][j].j)){
                this.tab[i][j].direction.push( new points(i+direction.x,j+direction.y))
            }}}
            else{
                for( let direction of DIRECTIONS2){
                    if(isValidSquare(direction.x+this.tab[i][j].i ,direction.y+this.tab[i][j].j)){
                    this.tab[i][j].direction.push( new points(i+direction.x,j+direction.y))
                }}
            }
        }
    }
    }
    draw(ctx){
      ctx.lineWidth=2;
      ctx.strokeStyle="black";
      /*-----------------horizontal----------------*/
       ctx.beginPath();
       
       ctx.moveTo(this.tab[0][1].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][1].x,this.tab[4][4].y);


       ctx.moveTo(this.tab[0][2].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][2].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][3].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][3].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][4].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][4].x,this.tab[4][4].y);
      
       ctx.moveTo(this.tab[0][5].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][5].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][6].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][6].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][7].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][7].x,this.tab[4][4].y);
      /*------------------vertical-----------------*/
       ctx.moveTo(this.tab[1][0].x,this.tab[1][0].y);
       ctx.lineTo(this.tab[1][8].x,this.tab[1][8].y);

       ctx.moveTo(this.tab[2][0].x,this.tab[2][0].y);
       ctx.lineTo(this.tab[2][8].x,this.tab[2][8].y);

       ctx.moveTo(this.tab[3][0].x,this.tab[3][0].y);
       ctx.lineTo(this.tab[3][8].x,this.tab[3][8].y);
       /*------------------oblic ------------------*/

       ctx.moveTo(this.tab[2][0].x,this.tab[2][0].y);
       ctx.lineTo(this.tab[0][2].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][0].x,this.tab[0][0].y);
       ctx.lineTo(this.tab[4][4].x,this.tab[4][4].y);
       
       ctx.moveTo(this.tab[0][2].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[0][6].x,this.tab[4][4].y);

       ctx.moveTo(this.tab[0][4].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[4][8].x,this.tab[4][8].y);

       ctx.moveTo(this.tab[0][6].x,this.tab[0][1].y);
       ctx.lineTo(this.tab[2][8].x,this.tab[2][8].y);

      /*------------------oblic ------------------*/
      ctx.moveTo(this.tab[2][0].x,this.tab[2][0].y);
      ctx.lineTo(this.tab[0][2].x,this.tab[0][1].y);
      
      ctx.moveTo(this.tab[4][0].x,this.tab[4][0].y);
      ctx.lineTo(this.tab[0][4].x,this.tab[0][1].y);

      ctx.moveTo(this.tab[0][2].x,this.tab[4][4].y);
      ctx.lineTo(this.tab[0][6].x,this.tab[0][1].y);

      ctx.moveTo(this.tab[4][4].x,this.tab[4][4].y);
      ctx.lineTo(this.tab[0][8].x,this.tab[0][8].y);

      ctx.moveTo(this.tab[0][6].x,this.tab[4][4].y);
      ctx.lineTo(this.tab[2][8].x,this.tab[2][8].y);
      /* border */
      ctx.moveTo(this.tab[0][0].x,this.tab[0][0].y);
      ctx.lineTo(this.tab[0][8].x,this.tab[0][8].y);
      ctx.lineTo(this.tab[4][8].x,this.tab[4][8].y);
      ctx.lineTo(this.tab[4][0].x,this.tab[4][0].y);
      ctx.lineTo(this.tab[0][0].x,this.tab[0][0].y);
      ctx.stroke();
      ctx.closePath()
      }

}
