let rest_du_double_prises = []
function selection_piece_a_supprimer(){
    if(Piece_selectioner_avant != undefined){
      ajout_piece_a_supprimer_contact (Piece_selectioner_avant.i, Piece_selectioner_avant.j ,  Piece_selectioner.i , Piece_selectioner.j )
      ajout_piece_a_supprimer_abso (Piece_selectioner_avant.i, Piece_selectioner_avant.j ,  Piece_selectioner.i , Piece_selectioner.j )
     
      if(piece_a_supprimers_absos.length !=0 && piece_a_supprimers_contacts.length !=0){//pour 2 player
        if (confirm("ok pour prise par contacte et annuler pour absorption ?", "Oui", "Non")) {
            copie_tabs1_vers_tabs2(piece_a_supprimers_absos , rest_du_double_prises)
            suppromer_pieces(piece_a_supprimers_contacts)
          } else {
            copie_tabs1_vers_tabs2(piece_a_supprimers_contacts , rest_du_double_prises)
            suppromer_pieces(piece_a_supprimers_absos)
          }
      }else{
        if(piece_a_supprimers_absos.length !=0){
        suppromer_pieces(piece_a_supprimers_absos)
      }else{
        suppromer_pieces(piece_a_supprimers_contacts)
      }
    }
  }
}

