let white = document.getElementById("white");
white.addEventListener("click", function changeBg(color){
    document.body.style.backgroundColor = "#ffffff"
})

let aqua = document.getElementById("aqua");
aqua.addEventListener("click", function changeBg(color){
    document.body.style.backgroundColor = "#00FFFF"
})

let violet = document.getElementById("violet");
violet.addEventListener("click", function changeBg(color){
    document.body.style.backgroundColor = "#8F00FF"
})

let black = document.getElementById("black");
black.addEventListener("click", function changeBg(color){
    document.body.style.backgroundColor = "#000000";
})

function changeBg(color){
    let txt = document.getElementsByClassName("text");
    if(color = "#000000"){
        for(let elm of txt){
            elm.style.color = "#ffffff";
        }
    } else {
        for(let elm of txt){
            elm.style.color = "#000000";
        }
    }

}


// let black = document.getElementById("black");
// black.addEventListener("click", function changeBg(color){
//     document.body.style.backgroundColor = "#000000";
//     let txt = document.getElementsByClassName("text");
//     if(color = "#000000"){
//         for(let elm of txt){
//             elm.style.color = "white";
//         }
//     } else {
//         for(let elm of txt){
//             elm.style.color = "black";
//         }
//     }
// })

// //-------2nd attempt

// let btn = document.getElementsByClassName("btn");
// btn.addEventListener("click", function changeBg(){
//     document.body.style.backgroundColor = "#000000"
//     if(backgroundColor = "#000000"){
//         document.body.style.color = "#ffffff";
//     } else {
//         document.body.style.color = "#000000";

//     }
// })