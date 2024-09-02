let buttons = document.querySelectorAll(".btn")
let screen = document.getElementById("display")
    console.log(buttons);
buttons.forEach(e => e.addEventListener("click",clickHandler))
    
function clickHandler(e){
    console.log(e.target.textContent );
    switch(e.target.textContent){
        case"=":screen.value = eval(screen.value)
        break;
        case"C":screen.value=""
        break;
        default:screen.value += e.target.textContent
    }
}