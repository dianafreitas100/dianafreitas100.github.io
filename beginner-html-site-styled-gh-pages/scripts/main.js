window.onload = function() {
    let myHeading = document.querySelector('h1');//variable with object value  - querySelector property that selects heading1
    let myImage = document.querySelector('img');
    let myButton = document.querySelector('button');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

    function setUserName(){
        let myName = prompt('Enter your name'); //permite escrever o nome
        localStorage.setItem('name', myName);/*allows us to store data in the browser and later retrieve it. É uma API. setItem é uma função do localStorage para guardar um item com o value da variable myName*/
  myHeading.textContent = 'Welcome, ' + myName;//change the text of myHeading variable with textContent property
    }
    
    if(!localStorage.getItem('name')) {// initialization code that structures the app when it first loads; if name data doesn´t exist ...
  setUserName();//run the function to create it
} else {//if it already exists, menaing the user already set it in a previous visit to the website
  let storedName = localStorage.getItem('name');//retrieve the name using getItem and store it in a variable called storedName
  myHeading.textContent = 'Welcome again, ' + storedName;//set the heading to be...including the storedName
}
    
    myButton.onclick = function() {//event handler onclick: when you click you run the function setUserName
  setUserName();
}
}

