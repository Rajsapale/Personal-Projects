
let bx = document.querySelectorAll('.box');
let rt = document.querySelector('#res');
let winner= document.querySelector('.winner');
let msg= document.querySelector('#msg');
let resetbtn=document.querySelector("#res");


let player=true;   // to track whos turn 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const endGame = () =>{              // this stops game after getting winner 
    for(let box of bx){
        box.disabled=true;
    }
}

const setNew=() =>{
    for(let box of bx){
        box.disabled=false;
        box.innerText="";
    }
}

const reset = () =>{

    setNew();
    player=true;
    winner.classList.add('hide');
    console.log("reset");
    
}
 
resetbtn.addEventListener("click",reset);

bx.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(player){
            box.innerText="X"
            box.style.color="#E6FB08";
            box.style.textShadow="0px 0px 10px rgb(255, 255, 255)";
            player= false;
            
            
        }else{
            box.innerText="O"
            player= true;
            box.style.color="#FF6605";
            box.style.textShadow="0px 0px 10px rgb(255, 255, 255)";
        }
        box.disabled=true;
        winnerCheck();
    })

    const winnerCheck = () =>{
        for(let combo of winPatterns){                             // this loop check every winning pattern
        //console.log(bx[combo[0]],bx[combo[1]],bx[combo[2]]);     // here we can access value of box in box array at that perticular position

        let box1Value= bx[combo[0]].innerText;
        let box2Value= bx[combo[1]].innerText;
        let box3Value= bx[combo[2]].innerText;

        if(box1Value != "" && box2Value != "" && box3Value != ""){    // this condition is to avoid empty box which can give false winning 
        if ( box1Value === box2Value && box1Value === box3Value){     //this check entries and then give us winner 
            console.log("winner"+ box1Value)
            endGame();
            winnerDisplay(box1Value);
            
        }
    }
    }
  }
        const winnerDisplay = (player) => {
            winner.classList.remove("hide");
            msg.innerText=`WINNER is ${player}`;
        }
}) 