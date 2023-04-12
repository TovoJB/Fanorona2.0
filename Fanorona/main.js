var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var height = canvas.height //hauteur
var width = canvas.width //largeur
let w =500
let h =900
const line = new lines(h/2 , w/2 , w , h ) ; 
line.draw(ctx)

let piece=[]
piece.push(new pieces("player2","piece1" , 0 , 0 ,"green"))
piece.push(new pieces("player2","piece2" , 0 , 1 ,"green"))
piece.push(new pieces("player2","piece3" , 0 , 2 ,"green"))
piece.push(new pieces("player2","piece4" , 0 , 3 ,"green"))
piece.push(new pieces("player2","piece5" , 0 , 4 ,"green"))
piece.push(new pieces("player2","piece6" , 0 , 5 ,"green"))
piece.push(new pieces("player2","piece7" , 0 , 6 ,"green"))
piece.push(new pieces("player2","piece8" , 0 , 7 ,"green"))
piece.push(new pieces("player2","piece9" , 0 , 8 ,"green"))

piece.push(new pieces("player2","piece10" , 1 , 0 ,"green"))
piece.push(new pieces("player2","piece11" , 1 , 1 ,"green"))
piece.push(new pieces("player2","piece12" , 1 , 2 ,"green"))
piece.push(new pieces("player2","piece13" , 1 , 3 ,"green"))
piece.push(new pieces("player2","piece14" , 1 , 4 ,"green"))
piece.push(new pieces("player2","piece15" , 1 , 5 ,"green"))
piece.push(new pieces("player2","piece16" , 1 , 6 ,"green"))
piece.push(new pieces("player2","piece17" , 1 , 7 ,"green"))
piece.push(new pieces("player2","piece18" , 1 , 8 ,"green"))

piece.push(new pieces("player2","piece19" , 2 , 0 ,"green"))
piece.push(new pieces("player2","piece20" , 2 , 2 ,"green"))
piece.push(new pieces("player2","piece21" , 2 , 6 ,"green"))
piece.push(new pieces("player2","piece22" , 2 , 8 ,"green"))


piece.push(new pieces("player1","piece23" , 2 , 1 ,"red"))
piece.push(new pieces("player1","piece24" , 2 , 3 ,"red"))
piece.push(new pieces("player1","piece25" , 2 , 5 ,"red"))
piece.push(new pieces("player1","piece26" , 2 , 7 ,"red"))


piece.push(new pieces("player1","piece27" , 3 , 0 ,"red"))
piece.push(new pieces("player1","piece28" , 3 , 1 ,"red"))
piece.push(new pieces("player1","piece29" , 3 , 2 ,"red"))
piece.push(new pieces("player1","piece30" , 3 , 3 ,"red"))
piece.push(new pieces("player1","piece31" , 3 , 4 ,"red"))
piece.push(new pieces("player1","piece32" , 3 , 5 ,"red"))
piece.push(new pieces("player1","piece33" , 3 , 6 ,"red"))
piece.push(new pieces("player1","piece34" , 3 , 7 ,"red"))
piece.push(new pieces("player1","piece35" , 3 , 8 ,"red"))

piece.push(new pieces("player1","piece36" , 4 , 0 ,"red"))
piece.push(new pieces("player1","piece37" , 4 , 1 ,"red"))
piece.push(new pieces("player1","piece38" , 4 , 2 ,"red"))
piece.push(new pieces("player1","piece39" , 4 , 3 ,"red"))
piece.push(new pieces("player1","piece40" , 4 , 4 ,"red"))
piece.push(new pieces("player1","piece41" , 4 , 5 ,"red"))
piece.push(new pieces("player1","piece42" , 4 , 6 ,"red"))
piece.push(new pieces("player1","piece43" , 4 , 7 ,"red"))
piece.push(new pieces("player1","piece44" , 4 , 8 ,"red"))

let Piece_selectioner
let Piece_selectioner_avant
let prise = true ;
//let suppression = true
//let currentPlayer = 1
let cpt=0

function reche_coordonner_sur_tab(coord , tabs){
    for(let tab of tabs){
        if(coord.i == tab.i && coord.j == tab.j){
            return true
        }
    }
  return false
}

let draw_piece = function(){
    let borer_circoe_color
    for(let one_piece of piece){

   if(prise_absorptoin_possibeles != undefined && prise_contact_possibeles !=undefined){
    if ( reche_coordonner_sur_tab(one_piece , prise_absorptoin_possibeles) ||reche_coordonner_sur_tab(one_piece , prise_contact_possibeles)
    ){
        borer_circoe_color='#95339c'
    }else{
        borer_circoe_color='#003300'
    }
   }else{
    borer_circoe_color='#003300'
   }

    ctx.beginPath();
    ctx.arc(one_piece.x, one_piece.y, one_piece.circleRadius , 0, 2 * Math.PI,false);
    ctx.fillStyle = one_piece.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = borer_circoe_color;
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

    //console.log(color_curent_player)
    if(color_curent_player == undefined){
        //console.log("color_curent_player !=undefined")
        tour_gestion()
    }else{
        console.log("color_curent_player : "+color_curent_player)
        console.log("2eme ou + tour , color-piece=selectioner : "+Piece_selectioner.colorOrigine)
        if(color_curent_player==Piece_selectioner.colorOrigine){
            decoloragePieceAvantDeSelectioner() 
        }else{
            tour_gestion()  
        }
    }

    //tour_gestion()

    if(winer()){
        alert("on a un gagnant "+color_curent_player);
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