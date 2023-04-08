function lerp(A,B,t){
    // console.log(A , B , t) // A=10 , B=190 , t=0.33 ou 0.66
     return (A+(B-A)*t);
 }
function pairepOuinpaire(a){
    if(a%2==0)
    return true
    else
    return false;
 }
 function pariter(a , b){
   if(pairepOuinpaire(a)==pairepOuinpaire(b)){
      return true
   }else{
      return false 
   }
 }
 function distanceEntre2Coordoner(Mx , Sx , My , Sy){ // distance Entre 2 Coordoner
    return (Math.sqrt((Mx - Sx) ** 2 + (My - Sy) ** 2))
 }

// Fonction pour vérifier si une case est valide (c'est-à-dire qu'elle se trouve sur le plateau)
function isValidSquare(col,row) {
   return row >= 0 && row < ROWS && col >= 0 && col < COLS;
 }
// Fonction pour vérifier si deux positions sont égales
function arePositionsEqual(pos1, pos2) {
   return pos1.row === pos2.row && pos1.col === pos2.col;
 }

 // Fonction pour vérifier si une position est valide (c'est-à-dire qu'elle se trouve sur le plateau)
function isValidPosition(pos) {
   return isValidSquare(pos.i, pos.j);
 }

 function return_Etat_dune_ligne(pos){
   if(line.tab[pos.i][pos.j].etat){
       return true
   }else{return false}
}



function comparaison_2_coordoners(i,j,X,Y){
   if((i==X)&&(j==Y)){
       return true
   }else{
       return false
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

function rerche_Si_Une_Piece_selectioner(){
   for(let one_piece of piece){
       if(one_piece.selectioner){return true}}return false
}

function deselectioner_tout_piece(){
   for(let one_piece of piece){
      one_piece.etat=false
   }
}

function Update_etat_ligne_en_false(){
   for(let i=0 ; i<=4 ; i++){
       for(let j=0 ; j<=8 ; j++ ){
           line.tab[i][j].etat=false
       }
   }
}

function Update_etat_ligne_en_true(){
   for(let i=0 ; i<=4 ; i++){
       for(let j=0 ; j<=8 ; j++ ){
           for(one_piece of piece){
               if(one_piece.i==line.tab[i][j].i && one_piece.j==line.tab[i][j].j){
                   line.tab[i][j].etat=true
               }
           }
       }
   }
}

function update_ligne(){
   Update_etat_ligne_en_false()//fals ra tsis zavatra
   Update_etat_ligne_en_true()//true ra misy zavatra
}

function piece_auto_repli_XY_grace_IJ (i,j){
   Piece_selectioner_avant = new pieces(Piece_selectioner.player,Piece_selectioner.id, Piece_selectioner.i , Piece_selectioner.j ,Piece_selectioner.colorOrigine)
   Piece_selectioner.i =i
   Piece_selectioner.j =j
   Piece_selectioner.x =line.tab[i][j].x
   Piece_selectioner.y =line.tab[i][j].y
   }

function decoloragePieceAvantDeSelectoner (){
   for(one_piece of piece){
       one_piece.deselectionerUnepiece()
   }
}



function update_direction_piece(){
   for(one_piece of piece){
      for(let i=0 ; i<=4 ; i++){
         for(let j=0 ; j<=8 ; j++ ){
          if(one_piece.i==i && one_piece.j==j){
            one_piece.direction=line.tab[i][j].direction
          }
         }
     }
   }
}

function recherche_color (i,j){
   for(one_piece of piece){
    if(i==one_piece.i && j == one_piece.j){
      return one_piece.colorOrigine
    }
   }
}

function suprimer(index){
   console.log("supprime:"+index)
   piece.splice(index,1)
}


function suppromer_pieces(piece_a_supprimers){
   for(piece_a_supprimer of piece_a_supprimers){
     for(one_piece of piece){
       if(piece_a_supprimer.i == one_piece.i && piece_a_supprimer.j== one_piece.j){
         suprimer(piece.indexOf(one_piece))
   }}
 }}