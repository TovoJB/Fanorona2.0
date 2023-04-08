
let prise_absorptoin_possibeles=[]
let piece_a_supprimer_absorbtion=[]

function si_prise_par_absorption(){
  let i = Piece_selectioner.i
  let j = Piece_selectioner.j   
  return_piece_absorbable(line.tab[i][j].direction)
}

function return_piece_absorbable(directions){
  prise_absorptoin_possibeles.splice(0, prise_absorptoin_possibeles.length);
 for(let direction of directions){
  return_point__necessair_absorption(direction)
  if(return_Etat_dune_ligne(direction)&& (!piece_enemi_ou_alier(direction)&&return_point__necessair_absorption(direction))){//position occuper par une piece
    prise_absorptoin_possibeles.push(direction)
  }
 }
 //console.log(prise_absorptoin_possibeles)
}


function piece_enemi_ou_alier(posi){//true allier false enemie
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



function selection_piece_a_supprimer(){
  if(Piece_selectioner_avant != undefined)
  //if()

 console.log(Piece_selectioner_avant)
 console.log(Piece_selectioner)
 console.log("--------")


}