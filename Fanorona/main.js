var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var height = canvas.height //hauteur
var width = canvas.width //largeur
let w =500
let h =900
const line = new lines(h/2 , w/2 , w , h ) ; 
line.draw(ctx)

let piece=[]
//piece.push(new pieces("player1","piece0" , 0 , 0 ,"red"))
piece.push(new pieces("player2","piece1" , 3 , 1 ,"green"))
//piece.push(new pieces("player2","piece3" , 1 , 3 ,"green"))
piece.push(new pieces("player2","piece2" , 1 , 2 ,"green"))
//piece.push(new pieces("player2","piece5" , 2 , 2 ,"red"))
piece.push(new pieces("player2","piece3" , 2 , 1 ,"red"))
//piece.push(new pieces("player2","piece7" , 1 , 4 ,"green"))
//piece.push(new pieces("player2","piece8" , 1 , 5 ,"green"))
//piece.push(new pieces("player2","piece9" , 1 , 6 ,"green"))
//piece.push(new pieces("player2","piece10" , 1 , 7 ,"green"))
//piece.push(new pieces("player2","piece11" , 1 , 8 ,"green"))
//piece.push(new pieces("player2","piece15" , 4 , 2 ,"green"))

piece.push(new pieces("player2","piece4" , 3 , 4 ,"red"))
piece.push(new pieces("player2","piece5" , 1 , 5 ,"red"))
piece.push(new pieces("player1","piece6" , 1 , 4 ,"green"))
piece.push(new pieces("player2","piece7" , 0 , 4 ,"red"))
piece.push(new pieces("player1","piece8" , 2 , 2 ,"green"))
piece.push(new pieces("player1","piece9" , 1 , 3 ,"green"))
piece.push(new pieces("player1","piece10" , 2 , 3 ,"green"))

piece.push(new pieces("player1","piece11" , 2 , 8 ,"green"))
piece.push(new pieces("player1","piece12" , 2 , 7 ,"green"))
piece.push(new pieces("player1","piece13" , 2 , 6 ,"green"))
piece.push(new pieces("player2","piece14" , 2 , 5 ,"red"))

let Piece_selectioner
let Piece_selectioner_avant
let prise = true ;
//let suppression = true
//let currentPlayer = 1


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
    

    console.log("main: "+rerche_Si_Une_Piece_selectioner())
    if(rerche_Si_Une_Piece_selectioner()){
        let position_selectioner = position_pour_deplacer(mouseX,mouseY)
        if(!return_Etat_dune_ligne(position_selectioner)){
        
           // Piece_selectioner_avant=Piece_selectioner
            deplacementDesPieces( position_selectioner)
        }
        
    }else if ( verification_si_selectionerUnepiece(mouseX,mouseY)) {
          prise = true
          Piece_selectioner=selectionerUnepiece(mouseX,mouseY)
         // console.log(Piece_selectioner)
    }
    
    update_ligne()
    selection_piece_a_supprimer()
    update_ligne()
    si_prise_par_absorption()
    si_prise_par_contact()

    tour_gestion()

    if(winer()){
        alert("on a un winer0 "+player_winer);
    }  
}

canvas.addEventListener('click',canvasClick)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    line.draw(ctx)
    draw_piece();
    requestAnimationFrame(animate);
  }
  animate();
