var numberOfButtons= document.querySelectorAll(".drum").length

document.querySelectorAll(".drum")[0].addEventListener("keydown", function(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
});

document.querySelectorAll(".drum")[1].addEventListener("click", function(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
});

document.querySelectorAll(".drum")[2].addEventListener("click", function(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
});
for(var i = 3,j = 0; i < numberOfButtons; i++,j++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var audio = new Audio('sounds/tom-' + j + '.mp3');
            audio.play();
        });
    }

document.addEventListener("keydown", function(event){
    console.log(event);
})

function makeSound(key){
    
}