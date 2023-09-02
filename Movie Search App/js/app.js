const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.getElementById("movie-box");
console.log(movieBox);
const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    showMovies(data.results);

}

const showMovies = (data) => {
    console.log(data);
    data.forEach ((mov) => {
        // console.log(mov.original_title);
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.innerHTML = `
        <img src="${IMGPATH + mov.poster_path}" />
        <div class="overlay">
            <div class="title">
                <h2>${mov.original_title}</h2>
                <span>Rating: ${mov.vote_average}</span>

            </div>
            <p>${mov.overview}</p>
            <br>
            <b>Released Date: ${mov.release_date}</b>
            
        </div>;
        `;
        
        movieBox.appendChild(boxes);
      

    })
}

getMovies(APIURL);
const searching = document.querySelector("#search");

// const searchFun = () =>{
//     if(searching.value != ""){
//         getMovies(searching.value);
//         searching.value += "";
//     } 
//     return false;
// }






searching.addEventListener("keyup", function(event){
    if(event.key != ""){
        getMovies(event.key);
        event.key += "";
    } 
    return ;

    console.log(event);

})























// const box = `
            // <div class="box">
            //     <img src="${IMGPATH+result}" alt="" />
            //     <div class="overlay">
            //         <h2>Overview:</h2>
            //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
            //     </div>
            // </div>
            // `