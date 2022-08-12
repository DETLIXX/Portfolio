document.querySelectorAll(".support-item")[0].addEventListener("click",openInstagram);
document.querySelectorAll(".support-item")[1].addEventListener("click",openGitHub);

function openInstagram() { 
    window.open("https://www.instagram.com/detlixx")
}
function openGitHub() { 
    window.open("https://github.com/DETLIXX")
}


var i = 0;
var innerText = document.getElementById("landingText").innerHTML; /* The text */
var justText = document.getElementById("landingText").textContent; /* The text */
var textLeng = justText.length;
var speed = 25; /* The speed/duration of the effect in milliseconds */

RemoveText();
setTimeout(typeWriter,500);

function RemoveText() { 
    document.getElementById("landingText").textContent = "";
}

function typeWriter() { 
    console.log(`${i} / ${textLeng}`);
    if (i < justText.length) {
        document.getElementById("landingText").innerHTML += justText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if(i == textLeng) { 
        document.getElementById("landingText").innerHTML = innerText;
        $(".myImg").removeClass("hidden");
    }
}