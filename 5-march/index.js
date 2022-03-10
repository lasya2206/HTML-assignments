//1 Assignment//
let createMatrix=(row,col)=>{
    let arr= new Array(row);
    for(let i=0;i<arr.length;i++){
        arr[i]=(new Array(col))
    }
    console.log(arr)
}
createMatrix(5,3)


let printMatrix=(matrix)=>{
    matrix.forEach((row)=>{
        row.forEach((item)=>{
            console.log(item)
        })
    })
}
printMatrix([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
//2 Assignment//
let possibleStringFromMatrix=(matrix,word)=>{
    let obj={}
    let obj2={}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            obj[matrix[i][j]]=obj[matrix[i][j]]+1||1;
        }
    }
    for(let i=0 ;i<word.length;i++){
        obj2[word[i]]=obj2[word[i]]+1||1
    }
    let isPossible;
    for(let i in obj2){
        if(obj.hasOwnProperty(i)){
            isPossible=false;
            if(obj[i]===obj2[i]){
                isPossible=true;
            }
        }
    }
    return isPossible;
    
}

console.log(possibleStringFromMatrix([ [ "A", "B", "C", "E" ],
[ "S", "F", "C", "S" ],
[ "A", "D", "E", "E" ],],"CFDASABCESEE"))

//3 Assignment//
var gameOfLife = function(board) {
    const DIRECTIONS = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]
  ];

  const isValid = function(x, y) {
    if (x >= 0 && y >= 0 && x < board.length && y < board[0].length)
      return true;
    else return false;
  };

  const getAliveNeighbors = function(x, y) {
    let aliveNeighs = 0;
    for (let dir of DIRECTIONS) {
      let newX = x + dir[0];
      let newY = y + dir[1];
      if (!isValid(newX, newY)) continue;
      if (board[newX][newY] === 1 || board[newX][newY] === -1) {
        aliveNeighs++;
      }
    }

    return aliveNeighs;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let aliveNeighbors = getAliveNeighbors(row, col);
      if (board[row][col] === 0) {
        if (aliveNeighbors === 3) board[row][col] = 2;
        else board[row][col] = 0;
      } else {
        if (aliveNeighbors === 2 || aliveNeighbors === 3) board[row][col] = 1;
        else board[row][col] = -1;
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] > 0) board[row][col] = 1;
      else board[row][col] = 0;
    }
  }
};