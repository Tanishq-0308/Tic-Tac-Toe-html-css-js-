let buttons=document.querySelectorAll('.buton');
let reset=document.querySelector('.reset');
let turn=true;
let result=document.querySelector('.result');
let main=document.querySelector('.main');
let container=document.querySelector('.container');
let count=0;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

main.addEventListener('click',()=>{
    console.log("hello");
    main.classList.add("hide");
    container.classList.remove("hide");
})
buttons.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        if(turn){
            buttons.innerText='X';
            turn=false;
        }
        else{
            buttons.innerText='0';
            turn=true;
        }
        buttons.disabled=true;
        buttons.style.backgroundColor='rgba(212, 179, 87, 0.966)';
        checkWinner();
    })
})

const boxdis=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val=buttons[pattern[0]].innerText;
        let pos2Val=buttons[pattern[1]].innerText;
        let pos3Val=buttons[pattern[2]].innerText;
        if(pos1Val!='' && pos2Val != '' && pos3Val!=''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                result.innerText=`${pos1Val} is the Winner`;
                boxdis();
            }else if(count===9){
                result.innerText="Match Draw";
            }
        }
    }
}

reset.addEventListener('click',()=>{
    buttons.forEach((buttons)=>{
        buttons.innerHTML=' ';
        buttons.disabled=false;
        buttons.style.backgroundColor='white';
        result.innerText='';
        count=0;
    })
})
