let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");

 let turnO=true; //playerO  and playerX, start with O
 const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

 //Add eventListener for each box
 boxes.forEach((box)=>{
     box.addEventListener("click" ,()=>{
        console.log("box was clicked");
        if(turnO){//player O playing
           box.innerText="O";
           turnO=false;
        }else{//player X is playing
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
     });
 });
 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };
      const showWinner=(winner)=>{
          msg.innerText=`Congrats ! Winner is ${winner}`;
          msgContainer.classList.remove("hide");
          disableBoxes();

      };

   const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   };
   const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
   };
   //check for winner with winpattern
   const checkWinner=()=>{
       for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
//  check values on position and match to pattern
     if(pos1Val !==""  && pos2Val !=="" && pos3Val !==""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
     }

       }
   };
   resetBtn.addEventListener("click",resetGame);