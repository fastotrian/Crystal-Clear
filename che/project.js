let ow = document.getElementById('ow')
let op = document.getElementById('op')
let gi = document.getElementById('gi')
let sign = document.getElementById('sign')
let head = document.getElementById('head')
let donate = document.getElementById('donateb')
ow.onclick=()=>{
    document.getElementById('s2').scrollIntoView();
}
op.onclick=()=>{
    document.getElementById('s3').scrollIntoView();
}
gi.onclick=()=>{
    document.getElementById('s4').scrollIntoView();
}
sign.onclick = ()=> {
    window.location.href = 'desktop.html'
}    
setTimeout(() => head.innerHTML = 'C', 1100);
setTimeout(() => head.innerHTML += 'r', 1200);
setTimeout(() => head.innerHTML += 'y', 1300);
setTimeout(() => head.innerHTML += 's', 1400);
setTimeout(() => head.innerHTML += 't', 1500);
setTimeout(() => head.innerHTML += 'a', 1600);
setTimeout(() => head.innerHTML += 'l', 1700);
setTimeout(() => head.innerHTML += ' ', 1800);
setTimeout(() => head.innerHTML += 'C', 1900);
setTimeout(() => head.innerHTML += 'l', 2000);
setTimeout(() => head.innerHTML += 'e', 2100);
setTimeout(() => head.innerHTML += 'a', 2200);
setTimeout(() => head.innerHTML += 'r', 2300);

donate.onclick = () => {
    window.location.href = 'desktop.html'
}