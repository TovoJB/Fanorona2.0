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
piece.push(new pieces("player2","piece1" , 0 , 1 ,"green"))
piece.push(new pieces("player2","piece3" , 1 , 2 ,"green"))
piece.push(new pieces("player2","piece4" , 1 , 0 ,"green"))
piece.push(new pieces("player2","piece4" , 2 , 1 ,"red"))
piece.push(new pieces("player2","piece5" , 2 , 0 ,"red"))



let Piece_selectioner

let draw_piece = function(){
    for(let one_piece of piece){
        ctx.beginPath();
        ctx.arc(one_piece.x, one_piece.y, one_piece.circleRadius , 0, 2 * Math.PI,false);
        ctx.fillStyle = one_piece.color;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        //ctx.setLineDash([5, 5]);
        ctx.stroke();
    }  
}

/*function drawCircle() {
    // Dessiner le cercle avec une couleur aléatoire
    if(prise_absorptoin_possibeles.length!==0){
        console.log("-")
    for(prise_absorptoin_possibele of prise_absorptoin_possibeles){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    ctx.fillStyle = randomColor;
    ctx.beginPath();
    ctx.arc(line.tab[prise_absorptoin_possibele.i][prise_absorptoin_possibele.j].x, line.tab[prise_absorptoin_possibele.i][prise_absorptoin_possibele.j].y, 14, 0, 2 * Math.PI);
    ctx.fill();
  }}}
  
  // Appeler la fonction drawCircle toutes les 500 millisecondes
  setInterval(drawCircle, 500);*/

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
    //si_prise_par_absorption()
    si_prise_par_contact()
}

canvas.addEventListener('click',canvasClick)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    line.draw(ctx)
    draw_piece();
    requestAnimationFrame(animate);
  }
  animate();
