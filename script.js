/*
Write a javascript code that prints out your name, 
height, and country on the screen
*/


const getName = document.querySelector(".name");
const getHeight = document.querySelector(".hgt");
const getCountry = document.querySelector(".country")



function displayText() {
    let userName = prompt("What is your name? ");
    while(!validateName(userName)) {
        // wn cancel is clicked
        if(userName === null) return;
        userName = prompt("What is your name? ");
    }

    getName.append(userName);
    
    
    let height = prompt("Your height, please? " );
    while(!validateName(height)) {
        // wn cancel is clicked
        if(height === null) return;
        height = prompt("Your height, please? ");
    }
    getHeight.append(height);
    
    
    let country = prompt("Your country of birth?  ");
    while(!validateName(country)) {
        // wn cancel is clicked
        if(country === null) return;
        country = prompt("Your country of birth? ");
    }
    getCountry.append(country);   
}


displayText();

function validateName(val) {
    // wn ok is clicked
    if(!val) return false;
    return true;
}








