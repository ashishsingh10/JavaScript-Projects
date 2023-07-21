const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const colorShow = '#' + randomNumber.toString(16); //
    console.log(randomNumber);
    console.log(colorShow);
    document.body.style.backgroundColor = colorShow;//show color in background
    document.querySelector("#color-code").innerText = colorShow;//color code webpage me dikhane ke liye
    navigator.clipboard.writeText(colorShow);//automatic colorcode copy karne ke liye. abh sirf paste karna hai
}

getColor();//starting me hi color code run karne ke liye

document.getElementById("btn").addEventListener("click", getColor);


// 16777215 --color code hexa me laane ke liye is number se mutiply karna hogass