class positions{
    constructor(left,right,top,bottom,i,j, etat=false, comptenu="N",id="piece"){
       this.left = left,
       this.right = right , 
       this.top = top ,
       this.bottom = bottom,
       this.i = i ,
       this.j= j ,
       this.etat= etat ,
       this.comptenu= comptenu;
       this.id=id

       this.x=lerp(this.left,this.right,(this.j/8));
       this.y=lerp(this.top,this.bottom,(this.i/4))

       this.direction=[]
    }

}