
function selectionerUnepiece(mouseX,mouseY){
    let distace
    decoloragePieceAvantDeSelectoner ()
    for(one_piece of piece){
         distace=(distanceEntre2Coordoner(mouseX , one_piece.x , mouseY , one_piece.y))
        if(distace<14){
            one_piece.selectionerUnepiece()
            return one_piece
        }
    }
}

function position_pour_deplacer(mouseX,mouseY){
    let line_x  ; let line_Y
    let minimum ; let distance
    let tempI   ; let tempJ
    minimum=MIN_DEFAULT_VAL


    let deplacement_possible=line.tab[Piece_selectioner.i][Piece_selectioner.j].direction
    for(let position of deplacement_possible){

            line_x=line.tab[position.i][position.j].x
            line_Y=line.tab[position.i][position.j].y
            distance = distanceEntre2Coordoner(mouseX , line_x , mouseY , line_Y) 
            if(minimum>distance){
                minimum=distance
                tempI=position.i
                tempJ=position.j
            }
    }
    let tmp_point_deplacement = new points(tempI,tempJ)
    return tmp_point_deplacement
}

function deplacementDesPieces(position_selectioner ){
    piece_auto_repli_XY_grace_IJ (position_selectioner.i,position_selectioner.j)
}

