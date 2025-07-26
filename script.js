//select the area to dispaly answer
const disp=document.querySelector('.disptime')

// setInterval(() => {}, interval);    -->note the syntax


setInterval(() => {
    //find the time
let time=new Date();
// console.log(time.toLocaleTimeString());
//inject the answer in the answer
disp.textContent=time.toLocaleTimeString();
}, 1000);
