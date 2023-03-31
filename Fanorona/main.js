var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var height = canvas.height //hauteur
var width = canvas.width //largeur
let w =500
let h =900
const line = new lines(h/2 , w/2 , w , h ) ; 
line.draw(ctx)

let piece=[]
piece.push(new pieces("piece0" , 0 , 0 ,"red"))
piece.push(new pieces("piece1" , 1 , 3 ,"green"))


let Piece_selectioner

let draw_piece = function(){
    for(let one_piece of piece){
        ctx.beginPath();
        ctx.arc(one_piece.x, one_piece.y, one_piece.circleRadius , 0, 2 * Math.PI,false);
        ctx.fillStyle = one_piece.color;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }  
}

function rerche_Si_Une_Piece_selectioner(){
    for(let one_piece of piece){
        if(one_piece.selectioner){return true}}return false
}

 function canvasClick(event){
    let plateauGame = canvas.getBoundingClientRect();
    let mouseX = event.clientX - plateauGame.left ;
    let mouseY = event.clientY - plateauGame.top;
    
    if(rerche_Si_Une_Piece_selectioner()){
        let position_selectioner = position_pour_deplacer(mouseX,mouseY)
        deplacementDesPieces( position_selectioner)
    }else if ( verification_si_selectionerUnepiece(mouseX,mouseY)) {
        Piece_selectioner=selectionerUnepiece(mouseX,mouseY)
    }
}
    

function decoloragePieceAvantDeSelectoner (){
    for(one_piece of piece){
        one_piece.deselectionerUnepiece()
    }
}

function selectionerUnepiece(mouseX,mouseY){
    let distace
    decoloragePieceAvantDeSelectoner ()
    for(one_piece of piece){
         distace=(distanceEntre2Coordoner(mouseX , one_piece.x , mouseY , one_piece.y))
        if(distace<14){
            one_piece.selectionerUnepiece()
            return piece.indexOf(one_piece)
        }
    }
    
}

function verification_si_selectionerUnepiece(mouseX,mouseY){
    let distace
    decoloragePieceAvantDeSelectoner ()
    for(one_piece of piece){
         distace=(distanceEntre2Coordoner(mouseX , one_piece.x , mouseY , one_piece.y))
        if(distace<14){
            return true
        }
    }
    return false
}

function position_pour_deplacer(mouseX,mouseY){
    let line_x  ; let line_Y
    let minimum ; let distance
    let tempI   ; let tempJ
    minimum=MIN_DEFAULT_VAL
    for(let i=0;i<=4;i++){
        for(let j=0;j<=8;j++){
            line_x=line.tab[i][j].x
            line_Y=line.tab[i][j].y
            distance = distanceEntre2Coordoner(mouseX , line_x , mouseY , line_Y) 
            if(minimum>distance){
                minimum=distance
                tempI=i
                tempJ=j
            }
        }
    }
    let tmp_point_deplacement = new points(tempI,tempJ)
    return tmp_point_deplacement
}

function piece_auto_repli_XY_grace_IJ (i,j){
piece[Piece_selectioner].i =i
piece[Piece_selectioner].j =j
piece[Piece_selectioner].x =line.tab[i][j].x
piece[Piece_selectioner].y =line.tab[i][j].y
}

function deplacementDesPieces(position_selectioner ){
    piece_auto_repli_XY_grace_IJ (position_selectioner.i,position_selectioner.j)
}


canvas.addEventListener('click',canvasClick)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    line.draw(ctx)
    draw_piece();
    requestAnimationFrame(animate);
  }
  animate();
