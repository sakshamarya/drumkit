
//clicking buttons

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){

        var key=this.innerHTML;
        makesound(key);

        buttonAnimation(key);
       
    });
}

//pressing keys on keyboard

document.addEventListener("keypress",function(event){

    makesound(event.key);
    buttonAnimation(event.key);

});


function makesound(key)
{
    switch (key) {

        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;

        case 'a':
            var base = new Audio('sounds/kick-bass.mp3');
            base.play();
            
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            
            break;
            
        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            
            break;

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            
            break;

    
        default:
            alert("Invalid key pressed");
            break;
    }

}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);
}




// function handleClick0()
// {
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// }

// function handleClick1()
// {
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// }

// function handleClick2()
// {
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// }

// function handleClick3()
// {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }

// function handleClick4()
// {
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// }

// function handleClick5()
// {
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// }

// function handleClick6()
// {
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// }




// document.querySelectorAll(".drum")[0].addEventListener('click',handleClick0);
// document.querySelectorAll(".drum")[1].addEventListener('click',handleClick1);
// document.querySelectorAll(".drum")[2].addEventListener('click',handleClick2);
// document.querySelectorAll(".drum")[3].addEventListener('click',handleClick3);
// document.querySelectorAll(".drum")[4].addEventListener('click',handleClick4);
// document.querySelectorAll(".drum")[5].addEventListener('click',handleClick5);
// document.querySelectorAll(".drum")[6].addEventListener('click',handleClick6);

