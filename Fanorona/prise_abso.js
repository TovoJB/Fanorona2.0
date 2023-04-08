
let prise_absorptoin_possibeles=[]
let piece_a_supprimers_absos=[]


function si_prise_par_absorption(){
  let i = Piece_selectioner.i
  let j = Piece_selectioner.j   
  return_piece_absorbable(line.tab[i][j].direction)
}

function return_piece_absorbable(directions){
  prise_absorptoin_possibeles.splice(0, prise_absorptoin_possibeles.length);
 for(let direction of directions){
  return_point__necessair_absorption(direction)
  if(return_Etat_dune_ligne(direction)&& (!piece_enemi_ou_alier(direction)&&return_point__necessair_absorption(direction))){
    prise_absorptoin_possibeles.push(direction)
  }
 }
}


function piece_enemi_ou_alier(posi){
  for(let one_piece of piece){
    if((posi.i == one_piece.i) && (posi.j== one_piece.j) && (Piece_selectioner.colorOrigine==one_piece.color)){
      return true
    }
}
return false
}

function return_point__necessair_absorption(position){
  let i;
  let j;
  let diff_I =position.i- Piece_selectioner.i
  let diff_J =position.j-Piece_selectioner.j

        i = Piece_selectioner.i -(diff_I)
        j = Piece_selectioner.j -(diff_J)
let d = new points(i,j)
if(isValidSquare(i,j) && !return_Etat_dune_ligne(d)){
  return true
} 
return false
}



function ajout_piece_a_supprimer_abso (initI, initJ,finalI, finalJ){
  if(piece_a_supprimers_absos.length !=0){
    piece_a_supprimers_absos.splice(0,piece_a_supprimers_absos.length)
   }
   let diffi = finalI - initI;
   let diffJ = finalJ - initJ;
   let i = initI;
   let j = initJ;
   let k = 0;
   
   while(i <= 4 && i >= 0 && j <= 8 && j >= 0) {
    
     if(diffi == diffJ && diffJ == 0) {
       break;
     }
   
     if(i <= 4 && i >= 0) {
       i = i - diffi;
     }
   
     if(j <= 8 && j >= 0) {
       j = j - diffJ;
     }
  
     if(i <= 4 && i >= 0 && j <= 8 && j >= 0 ) {
       if(line.tab[i][j].etat && Piece_selectioner.colorOrigine !=recherche_color (i,j)){
       let pos = new points(i, j);
       piece_a_supprimers_absos[k] = pos;
       k++;
     }else{
       break
     }
     }
   }
}