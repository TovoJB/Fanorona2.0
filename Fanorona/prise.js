

function si_prise_par_absorption(){
  let i = Piece_selectioner.i
  let j = Piece_selectioner.j   
  console.log(line.tab[i][j].direction)
  return_piece_absorbable(line.tab[i][j].direction)
}

function return_piece_absorbable(directions){
 for(let direction of directions){
  console.log(direction)
  if(return_Etat_dune_ligne(direction)){
    let pos = return_point__necessair_absorption(direction)
    console.log("------")
    console.log(pos)
    console.log("------")
  }
 }
}

function return_point__necessair_absorption(position){
  let diff_I = Piece_selectioner.i+position.i
  let diff_J = Piece_selectioner.j+position.j
  let p = new points(diff_I,diff_J)
  return p
}