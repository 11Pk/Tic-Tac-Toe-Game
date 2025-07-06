let reset= document.querySelector(".reset");
let mark=true;
let boxes=document.querySelectorAll(".btn");
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let player1=document.querySelector(".Player1");
let player2=document.querySelector(".Player2");
let start=document.querySelector(".start")
let winner1=document.querySelector(".winner1")
let winner2=document.querySelector(".winner2")
let nowinner=document.querySelector(".nowinner")
boxes.forEach((box)=>{
    box.disabled=true;})
start.onclick=()=>{
    player1.style.visibility = "visible";
    start.disabled=true;
    boxes.forEach((box)=>{
        box.disabled=false;})
}
function boxesdisable()
{count=0
    boxes.forEach((box)=>{
        if(box.disabled=true)
            count++

    })
    if(count===9)
    return(true)
    else
    return(false)
}
function checkwinner()
{
    for(let val of win)
    {
        
        const pos1=boxes[val[0]].innerText
        const pos2=boxes[val[1]].innerText
        const pos3=boxes[val[2]].innerText
        if(pos1===pos2 && pos2===pos3 && pos1!="."&& pos2!="."&&pos3!=".")
            return(true)

       
    
    }
    return(false)

}
boxes.forEach((box)=>{
    
    box.onclick=()=>{
    if(mark==true)
    {box.innerText="X";
     mark=false;
     player1.style.visibility = "hidden";
     player2.style.visibility = "visible";
    }
    else{
    box.innerText="0";
    mark=true;
    player1.style.visibility = "visible";
     player2.style.visibility = "hidden";
    }
    box.disabled=true;
    if(checkwinner()===true)
    {if(mark==true)
     {winner2.style.visibility="visible";
    player2.style.visibility = "visible";
    player1.style.visibility = "hidden";
     }
     else
     {winner1.style.visibility="visible";
    player1.style.visibility = "visible";
    player2.style.visibility = "hidden";
     }
     boxes.forEach((box)=>{
       box.disabled=true;
     })
        

        
    }
}});
reset.onclick=()=>
{
    boxes.forEach((box)=>{
        box.innerHTML=".";
    })
    boxes.forEach((box)=>{
        box.disabled=true;})
        player1.style.visibility="hidden";
        player2.style.visibility="hidden";
        winner1.style.visibility="hidden";
        winner2.style.visibility="hidden";
        start.disabled=false;
        mark=true;
}
if(boxesdisable==true && checkwinner==false)
{nowinner.style.visibility="visible";
    boxes.forEach((box)=>{
        box.innerHTML=".";
    })
    boxes.forEach((box)=>{
        box.disabled=true;})
        player1.style.visibility="hidden";
        player2.style.visibility="hidden";
        winner1.style.visibility="hidden";
        winner2.style.visibility="hidden";
        start.disabled=false;
        mark=true;
}


