let queenRowPosition = 4;
let queenColumnPosition = 4;

let opponentRowPosition = 3;
let opponentColumnPosition = 2;

let sucessfullAttack = false;

if (queenRowPosition === opponentRowPosition) {
    sucessfullAttack = true;
}
if (queenColumnPosition === opponentColumnPosition){
    sucessfullAttack = true;
}

for (let index = 1;index < 8 ;index += 1){
    let currentQueenRowPosition = queenRowPosition - index;
    let currentQueenColumnPosition = queenColumnPosition - index;
    if(currentQueenRowPosition === 0 || currentQueenColumnPosition === 0){
        break;
    }
    if( currentQueenRowPosition === opponentRowPosition && currentQueenColumnPosition === opponentColumnPosition){
        sucessfullAttack = true;
    }
}
for (let index =1;index < 8 ; index+=1){
    let currentQueenRowPosition = queenRowPosition - index;
    let currentQueenColumnPosition = queenColumnPosition + index;
    if(currentQueenRowPosition === 0 || currentQueenColumnPosition < 8){
        break;
    }
    if( currentQueenRowPosition === opponentRowPosition && currentQueenColumnPosition === opponentColumnPosition){
        sucessfullAttack = true;
    }
}
for (let index=1;index < 8 ;index+=1){
    let currentQueenRowPosition = queenRowPosition + index;
    let currentQueenColumnPosition = queenColumnPosition + index;
    if(currentQueenRowPosition < 8 || currentQueenColumnPosition < 8){
        break;
    }
    if( currentQueenRowPosition === opponentRowPosition && currentQueenColumnPosition === opponentColumnPosition){
        sucessfullAttack = true;
    }
}
for (let index=1;index < 8 ;index+=1){
    let currentQueenRowPosition = queenRowPosition + index;
    let currentQueenColumnPosition = queenColumnPosition - index;
    if(currentQueenRowPosition < 8 || currentQueenColumnPosition === 0){
        break;
    }
    if( currentQueenRowPosition === opponentRowPosition && currentQueenColumnPosition === opponentColumnPosition){
        sucessfullAttack = true;
    }
}
if (sucessfullAttack === true){
    console.log('Ataque da Rainha REALIZADO!!! :)')
}
else {
    console.log('Ataque da Rainha NÃO foi efetuado :(')
}