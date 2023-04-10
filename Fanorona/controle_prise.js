function selection_piece_a_supprimer(){
    if(Piece_selectioner_avant != undefined){
      ajout_piece_a_supprimer_contact (Piece_selectioner_avant.i, Piece_selectioner_avant.j ,  Piece_selectioner.i , Piece_selectioner.j )
      ajout_piece_a_supprimer_abso (Piece_selectioner_avant.i, Piece_selectioner_avant.j ,  Piece_selectioner.i , Piece_selectioner.j )
     
      if(piece_a_supprimers_absos.length !=0 && piece_a_supprimers_contact.length !=0){//pour 2 player
        if (confirm("ok pour prise par contacte et annuler pour absorption ?", "Oui", "Non")) {
         // console.log("if if")
            suppromer_pieces(piece_a_supprimers_contact)
          } else {
           // console.log("if else")
            suppromer_pieces(piece_a_supprimers_absos)
          }
      }else{
        if(piece_a_supprimers_absos.length !=0){
         // console.log("else if")
        suppromer_pieces(piece_a_supprimers_absos)
      }else{
       // console.log("else else")
        suppromer_pieces(piece_a_supprimers_contact)
      }
    }
  }
  
}