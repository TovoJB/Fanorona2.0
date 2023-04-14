
let player_winer
let nouv_select_piece = true
let currentPlayer = "player1";

let color_curent_player 

let firstMove = true;

let tour_next = false
let prise_possible = false
let pass_supr = false
function tour_gestion (){
    if(nouv_select_piece){
        if(prise_absorptoin_possibeles.length ==0 && prise_contact_possibeles.length==0){
            tour_next = true

        }else{
            prise_possible = true
        }
        nouv_select_piece= false
        firstMove = false
    }else{
        if(prise_absorptoin_possibeles.length >0 || prise_contact_possibeles.length>0){

            if(tour_next){
                prise = false
            }
            if(prise_possible && !pass_supr){
                prise = false
            }
            firstMove = false
        }else{
            firstMove = false
            prise = false
            next_tour=false
        }
    }

if(!prise){
    nouv_select_piece= true
    firstMove = true
    tour_next = false
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    color_curent_player = Piece_selectioner.colorOrigine
    decoloragePieceAvantDeSelectioner();
    Piece_selectioner_avant = undefined
    prise_absorptoin_possibeles.splice(0, prise_absorptoin_possibeles.length);
    piece_a_supprimers_contacts.splice(0,piece_a_supprimers_contacts.length)
}
prise = false
}
  


function winer( ){
   let cpt_rouge =0
    let cpt_ver =0
    for(let one_piece of piece){
        if(one_piece.colorOrigine == "red"){cpt_rouge++ }else {cpt_ver++}
    }
    if(cpt_rouge==0 || cpt_ver == 0){
        if(cpt_rouge==0){player_winer = "player_rouge"
        }else{player_winer = "player_rouge"}
        return true }else{ return false
    }
}






