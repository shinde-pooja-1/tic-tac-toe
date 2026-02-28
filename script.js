let boxes=document.querySelectorAll(".box");
boxes=Array.from(boxes);
let turn=true;
let o,O ,x,X;
init();
function init(){
    turn=true;
    o=0;
    O=["","",""]
    x=0;
    X=["","",""]
}

//for the display 'O' and 'X'

 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     if(turn)
        {
            if(O[o]!=""){
                O[o].disabled=false;
                O[o].innerHTML=""
            }
            O[o]=box;
            if(o==2) o=-1;
            box.innerHTML="O";
            o++;
            turn=false;
            winner("O");
        }
        else{
            if(X[x]!=""){
                X[x].innerHTML=""
                X[x].disabled=false;
            }
            X[x]=box;
            if(x==2) x=-1;
            box.innerHTML="X";
            x++;
            turn=true;
            winner("X");
        }
        box.disabled=true;
})
})
 
// for define winner
let w=document.querySelector(".con");
let win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8,],[2,4,6],[3,4,5],[6,7,8]];
function winner(ch)
{
    for(let pos of win)
        {
            if(boxes[pos[0]].innerHTML==ch && boxes[pos[1]].innerHTML==ch && boxes[pos[2]].innerHTML==ch){
                w.style.visibility="visible"
                document.querySelector(".win").innerHTML=`${ch} win`
                disableBtn(true);
            }    
        }
}
//for disable buttnons
function disableBtn(t){
    boxes.forEach((btn)=>{btn.disabled=t})
}
//for new game button
let newG = document.querySelectorAll(".new-game");
newG.forEach((n)=>{
    n.addEventListener("click",()=>{
        disableBtn(false);
        boxes.forEach((btn)=>{
            btn.innerHTML=""
        })
        w.style.visibility="hidden"
        init();
    })
    
})

//for cancle the winner box
let cancl = document.querySelector(".cancle");
cancl.addEventListener("click",()=>{
    w.style.visibility="hidden"
})
let dark=document.querySelector(".dark");
dark.addEventListener("click",()=>{
    document.querySelector(':root').classList.toggle('change-color');
})
