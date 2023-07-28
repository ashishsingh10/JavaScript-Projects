const API_URL = "https://api.github.com/users/";
const htmlWork = document.querySelector("#main");

const apiCalling = async (username1) => {
    const response = await fetch(API_URL + username1);
    const data = await response.json();
    console.log(data);
    const card = `
    <div class="card">
                <div>
                    <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
                </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                   
                </div>
            </div>
        </div>
    `
    htmlWork.innerHTML = card;

    reposCalling(username1);
    

}


apiCalling("ashishsingh10");


const reposCalling = async (username2) =>{
    const repos   = document.querySelector("#repos");
    const response2 = await fetch(API_URL + username2 + "/repos")
    const data2 = await response2.json();
    // console.log(data2);
    // console.log(repos);
    data2.forEach(
        (item) => {
        // console.log(item);
        const elm = document.createElement("a");
        elm.classList.add("repo");
        elm.href = item.html_url;
        elm.innerText = item.name;
        elm.HTML_target = "_blank";
        repos.appendChild(elm);
    });
    
}

const formWork = document.querySelector("#search");

const formFun = () => {
    if (formWork.value !=""){
        apiCalling(formWork.value);
        formWork.value="";
    } 
    return false;
}



formWork.addEventListener("focusout", function(){ //focusout se muse ko search box se bahar jaane pe function call kar dega
    formFun();
})