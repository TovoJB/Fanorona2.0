function lerp(A,B,t){
    // console.log(A , B , t) // A=10 , B=190 , t=0.33 ou 0.66
     return (A+(B-A)*t);
 }
function pairepOuinpaire(a){
    if(a%2==0)
    return true
    else
    return false;
 }
 function pariter(a , b){
   if(pairepOuinpaire(a)==pairepOuinpaire(b)){
      return true
   }else{
      return false 
   }
 }
 function distanceEntre2Coordoner(Mx , Sx , My , Sy){ // distance Entre 2 Coordoner
    return (Math.sqrt((Mx - Sx) ** 2 + (My - Sy) ** 2))
 }

// Fonction pour vérifier si une case est valide (c'est-à-dire qu'elle se trouve sur le plateau)
function isValidSquare(col,row) {
   return row >= 0 && row < ROWS && col >= 0 && col < COLS;
 }
// Fonction pour vérifier si deux positions sont égales
function arePositionsEqual(pos1, pos2) {
   return pos1.row === pos2.row && pos1.col === pos2.col;
 }

 // Fonction pour vérifier si une position est valide (c'est-à-dire qu'elle se trouve sur le plateau)
function isValidPosition(pos) {
   return isValidSquare(pos.i, pos.j);
 }
 
 