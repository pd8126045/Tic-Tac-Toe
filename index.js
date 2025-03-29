let boxes=document.querySelectorAll(".box");
console.dir(boxes);
let resetbtn=document.querySelector("#set");
console.dir(resetbtn);
let newbtn=document.querySelector("#new");
console.dir(newbtn);
let msg=document.querySelector("#msg");
console.dir(msg);
let msgcontainer=document.querySelector(".msg-container");
console.dir(msgcontainer);
let turn="x";


let winpattarn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];


const resetgame=()=>{
    turn="x";
    enableboxes();
    msgcontainer.classList.add("hide");

};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("success");
        if(turn==="x"){
            box.innerText="o";
            box.style.color="black";
            //box.style.backgroundColor="white";
            turn="o";
        }
        else{
            box.innerText="x";
            box.style.color="white";
           // box.style.backgroundColor="black";
            turn="x";
        }
        box.disabled=true;

        checkwinner();
    });
});


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText="Congratulation winner is "+(winner);
    msgcontainer.classList.remove("hide");
    disableboxes();
};



const checkwinner=()=>{
    for(let pattern of winpattarn){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

            if(pos1!=""&&pos2!=""&&pos3!=""){
                if(pos1===pos2&&pos2===pos3){
                    console.log("winner",pos1);
                    showwinner (pos1);
                }
            }
    }
};



newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
