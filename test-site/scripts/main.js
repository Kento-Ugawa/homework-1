const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "test-site/images/dog.jpeg") {
        myImage.setAttribute("src", "test-site/images/cat.jpg");
    }
    else {
        myImage.setAttribute("src", "test-site/images/dog.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}さん、犬と猫はかわいいよ。`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `犬と猫はかわいいよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
