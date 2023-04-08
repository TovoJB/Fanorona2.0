let prise_contact_possibeles=[]
let piece_a_supprimers_contact=[]

function si_prise_par_contact(){
    let i = Piece_selectioner.i
    let j = Piece_selectioner.j   
    return_piece_contacte(line.tab[i][j].direction)
    //console.log(prise_contact_possibeles)
  }

  function return_piece_contacte(directions){
    prise_contact_possibeles.splice(0, prise_contact_possibeles.length);
    for(direction of directions){
    if(!return_Etat_dune_ligne(direction)){
        verifie_positoion_prise_contact(direction)
    }
}}

function verifie_positoion_prise_contact(position){
     let i;
     let j;
     let diff_I =position.i- Piece_selectioner.i
     let diff_J =position.j-Piece_selectioner.j
         i = position.i +(diff_I)
         j = position.j +(diff_J)
         let d = new points(i,j)
      
    if(isValidSquare(i,j) && return_Etat_dune_ligne(d)&&!return_Etat_dune_ligne(position)&&!piece_enemi_ou_alier(d)){
        prise_contact_possibeles.push(d)
        return true
      } 
    return false
}







function ajout_piece_a_supprimer_contact (initI, initJ,finalI, finalJ){
   if(piece_a_supprimers_contact.length !=0){
      piece_a_supprimers_contact.splice(0,piece_a_supprimers_contact.length)
    }
    let diffi = finalI - initI;
    let diffJ = finalJ - initJ;
    let i = finalI;
    let j = finalJ;
    let k = 0;
    
    while(i <= 4 && i >= 0 && j <= 8 && j >= 0) {
      if(diffi == diffJ && diffJ == 0) {
        break;
      }
    
      if(i <= 4 && i >= 0) {
        i = i + diffi;
      }
    
      if(j <= 8 && j >= 0) {
        j = j + diffJ;
      }
   
      if(i <= 4 && i >= 0 && j <= 8 && j >= 0 ) {
        if(line.tab[i][j].etat && Piece_selectioner.colorOrigine !=recherche_color (i,j)){
        let pos = new points(i, j);
        piece_a_supprimers_contact[k] = pos;
        k++;
      }else{
        break
      }
      }
    }

}


