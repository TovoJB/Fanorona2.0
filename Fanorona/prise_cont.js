let prise_contact_possibeles=[]

function si_prise_par_contact(){
    let i = Piece_selectioner.i
    let j = Piece_selectioner.j   
    return_piece_contacte(line.tab[i][j].direction)
    console.log(prise_contact_possibeles)
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
      
      if(isValidSquare(i,j) && !return_Etat_dune_ligne(d)&&!return_Etat_dune_ligne(position)){
        prise_contact_possibeles.push(d)
         return true
      } 
      return false
      }