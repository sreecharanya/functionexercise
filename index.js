  console.clear()
  function makeLine(size){
    let line='';
    for(let i=0;i<size;i++){
     // console.log(i)
    line ="#"+line
    
    }
    console.log(line)
  }
  console.log("Make Line")
  console.log(makeLine(10))

  function  makeSquare(size){
    let square='';
    for(let i=0;i<size;i++){
      square=makeLine(size)
    }
    console.log(square) 
  }
  console.log("Square")
  makeSquare(4)

  function makeRectangle(width, height){
    let rec = " ";
    
      while(height){
        rec=makeLine(width)
        height--;
        
        }    
      
      console.log(rec)
  }
  console.log("Rectangle")
  console.log(makeRectangle(8,8))

  function makeDownwardStairs(height) {
    let stairs;
    for (let i=0;i<height;i++){
      stairs=makeLine(i)
      //console.log(typeof stairs)
    }
    console.log(stairs)
  }
  console.log("Stairs")
  makeDownwardStairs(8)

  function makeSpaceLine(numSpaces,numChars){
    let space='';
    let hash="";
        // console.log("numChars",numChars)
     for(let i=0;i<numSpaces;i++){
      space=" "+space
    }
    for(let i=0;i<numChars;i++){
      hash='#'+hash
    }
     //console.log("hash",hash)
    let spaceLine=space+hash+space;
    console.log(spaceLine)
    }
  console.log("Make Spaceline")
  makeSpaceLine(3,5)

  function makeIsoscelesTriangle(height){
          let tri=" ";
            for(let i=0;i<height;i++){
              makeSpaceLine( height - i - 1 , 2 * i + 1)
            }
  }
  console.log("Isosceles Triangle")
  console.log(makeIsoscelesTriangle(5))

  function rev(height){
    let revere=" "
    for(let i=height;i>=0;i--){
            revere= makeSpaceLine( height - i  , 2 * i + 1 )
            }
           // console.log("rev",revere)
  }
  console.log("Reverse")
  console.log(rev(5))

  function makeDiamond(height){
    let dia=makeIsoscelesTriangle(height)+rev(height-1)
  }
  console.log("Make Diamond")
  makeDiamond(5)