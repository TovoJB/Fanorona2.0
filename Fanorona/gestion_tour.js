//ray mande volalohany , ra mamono iz de mbola afaka mande , si non tour player manaraka fun

/*function tour_gestion(){
    if(nouv_select_piece){
        if(prise_absorptoin_possibeles.length==0 && prise_contact_possibeles==0){
            console.log("ontinue")
            nouv_select_piece=false
        }
    }else{
        if(prise_absorptoin_possibeles.length==0 && prise_contact_possibeles==0){
            console.log("player suivant")
            decoloragePieceAvantDeSelectioner ()
        }
    }

}*/





//let nouv_select_piece = true
//let currentPlayer = 1;
let player_winer
function tour__gestion(){
  if(nouv_select_piece){
    if(prise_absorptoin_possibeles.length==0 && prise_contact_possibeles==0){
      console.log("continue");
      nouv_select_piece=false;
    }
  }else{
    if(prise_absorptoin_possibeles.length > 0){
      console.log("Le joueur " + currentPlayer + " élimine des pièces ennemies.");
      // Mettre à jour le plateau de jeu pour supprimer les pièces éliminées
      // Mettre à jour les variables de jeu
    } else if (prise_contact_possibeles > 0){
      console.log("Le joueur " + currentPlayer + " peut encore déplacer ses pièces.");
      // Mettre à jour les variables de jeu
    } else {
      console.log("Le joueur " + currentPlayer + " termine son tour.");
      decoloragePieceAvantDeSelectioner();
      // Mettre à jour les variables de jeu
      currentPlayer = currentPlayer === 1 ? 2 : 1; // Passer au joueur suivant
    }
  }
}


let nouv_select_piece = true;
let currentPlayer = 1;
let firstTurn = true;

function tour_gestion(){
  if(nouv_select_piece){
    if(prise_absorptoin_possibeles.length==0 && prise_contact_possibeles==0){
      console.log("nouv_select_piece pas de prise: "+nouv_select_piece);
      
      decoloragePieceAvantDeSelectioner();
      nouv_select_piece=false;
      firstTurn = false
    }else{
        console.log("prise nouv_select_piece: "+nouv_select_piece);
        //nouv_select_piece=false;  
    }
  }else{
    if (firstTurn || prise_absorptoin_possibeles.length > 0){
      console.log("Le joueur " + currentPlayer + " élimine des pièces ennemies. firstTurn :" +firstTurn +" nouv_select_piece:"+nouv_select_piece);
      // Mettre à jour le plateau de jeu pour supprimer les pièces éliminées
      // Mettre à jour les variables de jeu
      
      firstTurn = false;
    } else if (prise_contact_possibeles > 0){
      console.log("Le joueur " + currentPlayer + " peut encore déplacer ses pièces. firstTurn :"+firstTurn +" nouv_select_piece:"+nouv_select_piece);
      // Mettre à jour les variables de jeu
    } else {
      console.log("Le joueur " + currentPlayer + " termine son tour."+firstTurn +" nouv_select_piece:"+nouv_select_piece);
      decoloragePieceAvantDeSelectioner();
      // Mettre à jour les variables de jeu
      currentPlayer = currentPlayer === 1 ? 2 : 1; // Passer au joueur suivant
      firstTurn = true;
    }
  }
}

function winer( ){
   /* let cpt_rouge =0
    let cpt_ver =0
    for(let one_piece of piece){
        if(one_piece.colorOrigine == "red"){cpt_rouge++ }else {cpt_ver++}
    }
    if(cpt_rouge==0 || cpt_ver == 0){
        if(cpt_rouge==0){player_winer = "player_rouge"
        }else{player_winer = "player_rouge"}
        return true }else{ return false
    }*/
}






