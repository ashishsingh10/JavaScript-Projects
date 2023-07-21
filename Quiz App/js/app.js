const questions = [{
    que : "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Markup Language",
    c: "Hyper Tabular Markup Language",
    d: "None of these",
    correct: "a"


},
{
    que : "Which among these is not a Web browser?",
    a: "Chrome",
    b: "www",
    c: "Opera",
    d: "Brave",
    correct: "b"


},
{
    que : "Which one of the following is an example of an ‘internet search engine?",
    a: "LINUX",
    b: "MS Word",
    c: "Windows",
    d: "Google",
    correct: "d"


}]

let index = 0;
let total = questions.length;
console.log(total);
let right = 0, wrong = 0;
const questionBox = document.getElementById("questionBox");
const optionBox = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    };
    reset();
    const data = questions[index];
    console.log(data);
    // console.log(optionBox);
    
    questionBox.innerText = `${index+1}) ${data.que}`;
    optionBox[0].nextElementSibling.innerText = data.a;
    optionBox[1].nextElementSibling.innerText = data.b;
    optionBox[2].nextElementSibling.innerText = data.c;
    optionBox[3].nextElementSibling.innerText = data.d;
};


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans,data.correct)
    if(ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    optionBox.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            } 
        }
    )
    return answer;
}
const reset = () => {
    optionBox.forEach(
        (input2) => {
            input2.checked = false;
        }
        
    )
}

const endQuiz = () =>{
    document.querySelector(".container").innerHTML = `
    <div style="text-align:center;padding:25px 0;">
    <h3> Thanks to participate in Quiz </h3>
    <h2> ${right}/ ${total}
    </div>`;
}
loadQuestion();

