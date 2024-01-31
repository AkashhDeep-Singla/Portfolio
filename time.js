let output = document.getElementsByClassName("time");

window.addEventListener('load',()=>{
    let today = new Date().getTime();
    
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let sec = today.getSeconds();
    let time = `${hrs}:${mins}:${sec}`

    output.innerText = time;
});