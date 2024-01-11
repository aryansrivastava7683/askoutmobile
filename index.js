var imgInitial ="bear-heart.jpeg";
var imgFinal = "bear-dance.gif";
var textImgInitial="question.jpeg";
var textImgFinal= "finally.jpeg";
var noSparkle = "";
var sparkle = "sparkle.gif"

function moveButton() {
    var buttonNo = document.querySelector('.moving-button');
    var randomX = Math.floor(Math.random() *400);
    var randomY = Math.floor(Math.random() * 280);
    buttonNo.style.transform = `translate(${randomX}%, ${randomY}%)`;
    
}

function changeImg(){

    var imageElement1 = document.querySelector('.changeable-image');
    var imageElement2 = document.querySelector('.text-img')
    var buttons = document.querySelectorAll('.yes-button, .moving-button');
    
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
    
    imageElement1.src = imgFinal;
    imageElement2.src = textImgFinal;
    triggerConfetti();
}

window.onload = function(){
    imageElement1.src = imgInitial;
    imageElement2.src = textImgInitial;
    button.style.display= 'block'
}
