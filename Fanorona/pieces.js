class pieces{
    constructor( player, id , i , j ,color){
        this.player=player
        this.id=id
        this.x=line.tab[i][j].x
        this.y=line.tab[i][j].y
        this.color=color;
        this.colorOrigine=color
        this.circleRadius=14
        this.i = i;
        this.j=j ;
        this.selectioner=false
        this.direction= line.tab[i][j].direction
    }
    selectionerUnepiece(){
        this.selectioner=true
        this.color='blue'
    }
    deselectionerUnepiece(){
        this.selectioner=false
        this.color=this.colorOrigine
    }
    }