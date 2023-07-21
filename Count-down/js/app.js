const endDate = "10 July  2023 09:55 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
   
    const diff = (end - now) / 1000; //1000 se divide karne se mili second ko second me convert karte he
    console.log(diff);
    if(diff < 0){
        return;
    }

 
    //calculate day
    const day = Math.floor(diff / 60 / 60 / 24);
    console.log(day);
    //html ke input wale attribute me ".value" karke hi data dalte he. [0] array ki position he
    inputs[0].value = day;

    //calculate hours 
    const hours = Math.floor(diff / 60 / 60) % 24;
    console.log(hours);
    inputs[1].value = hours;

    //calculate minutes
    const minutes = Math.floor(diff / 60) % 60; 

    console.log(minutes);
    inputs[2].value = minutes;

    //calculate seconds
    const seconds = Math.floor(diff % 60);
    console.log(seconds);
    inputs[3].value = seconds;

} 

// clock();

const myInterval = setInterval(clock, 1000);
