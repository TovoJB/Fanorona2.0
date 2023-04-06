var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var height = canvas.height //hauteur
var width = canvas.width //largeur
let w =500
let h =900
const line = new lines(h/2 , w/2 , w , h ) ; 
line.draw(ctx)

let piece=[]
piece.push(new pieces("player1","piece0" , 0 , 0 ,"red"))
piece.push(new pieces("player2","piece1" , 1 , 3 ,"green"))


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

function affichage_Piece(){
    for(let one_piece of piece){
        console.log(one_piece)
    }
}

function affichage_ligne(){
    for(let i=0 ; i<=4 ; i++){
        for(let j=0 ; j<=8 ; j++ ){
           console.log("tab["+i+"]["+j+"]:"+line.tab[i][j].etat)
           
        }
    }
    console.log("-------------------")
}

 function canvasClick(event){
    let plateauGame = canvas.getBoundingClientRect();
    let mouseX = event.clientX - plateauGame.left ;
    let mouseY = event.clientY - plateauGame.top;
    
    if(rerche_Si_Une_Piece_selectioner()){
        let position_selectioner = position_pour_deplacer(mouseX,mouseY)
        if(!return_Etat_dune_ligne(position_selectioner)){
            deplacementDesPieces( position_selectioner)
        }
        
    }else if ( verification_si_selectionerUnepiece(mouseX,mouseY)) {
        
        Piece_selectioner=selectionerUnepiece(mouseX,mouseY)
    }
    update_ligne()
    si_prise_par_absorption()
}

canvas.addEventListener('click',canvasClick)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    line.draw(ctx)
    draw_piece();
    requestAnimationFrame(animate);
  }
  animate();
