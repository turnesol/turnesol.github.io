(function() {
    'use strict';
    console.log('reading js');

    // opening the overlay

    // submit the information
    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault

        document.getElementById('.overlay').className = "showing";

        // document.getElementById("longForm").submit();
        // document.getElementById("wordInput").submit();
    });

        document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();

        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function (e){
        if (e.key === 'Escape'){
            document.getElementById('overlay').className = 'hidden';
        }
    })

// JS for long Form 
const longForm = document.querySelector('#longForm');
const madlib = document.querySelector('#madlib');

longForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let yourName = document.querySelector('#yourName').value;
    let youLove = document.querySelector('#youLove').value;
    let threePrzdPoses1 = document.querySelector('#threePrzdPoses1').value;
    let threePrzdPoses2 = document.querySelector('#threePrzdPoses2').value;
    let threePrzdPoses3 = document.querySelector('#threePrzdPoses3').value;
    let plurObject1 = document.querySelector('#plurObject1').value;
    let bodyPart2 = document.querySelector('#bodyPart2').value;
    let noun3 = document.querySelector('#noun3').value;
    let plurIncrmntTime4 = document.querySelector('#plurIncrmntTime4').value;
    let adj5 = document.querySelector('#adj5').value;
    let adj5 = document.querySelector('#adj5').value;
    let adv6 = document.querySelector('#adv6').value;
    let groupOfPpl7 = document.querySelector('#groupOfPpl7').value;
    let adv8 = document.querySelector('#adv8').value;
    let noun9 = document.querySelector('#noun9').value;
    let emo10 = document.querySelector('#emo10').value;
    let personalItem11 = document.querySelector('#personalItem11').value;
    let verb12 = document.querySelector('#verb12').value;
    let object13 = document.querySelector('#object13').value;
    let name14 = document.querySelector('#name14').value;
    let event15 = document.querySelector('#event15').value;

    // I really dont know what this JS is doing here
//     let myText = `How do I love ${youLove}? Let me count the ${plurObject1}. I love ${youLove} to the depth and breadth and height; My ${bodyPart2} can reach, when feeling out of sight; For the ends of being and ideal ${noun3}. I love ${youLove} to the level of ${plurIncrmntTime4}; Most ${adj5} need, by sun and candle-light. I love ${youLove}  ${adv6},  as ${groupOfPpl7} strive for right. I love ${youLove} ${adv8}, as they turn from ${noun9}. I love ${youLove} with the passion put to use; In my old ${emo10}, and with my ${personalItem11}’s faith. I love ${youLove} with a love I seemed to ${verb12}; With my lost ${object13}. I love ${youLove} with the ${threePrzdPoses1},${threePrzdPoses2},${threePrzdPoses3}(MOST PRIZED POSSESSIONS), of all my life; and, if ${name14} choose, I shall but love ${youLove} better after ${event15}.`;
    
//     }

//     madlib.innerHTML = myText;
// });

// // let myP = document.querySelector('#idk');

// myP.innerHTML = "This is where the text goes <b>idk</b>."

// let formData = document.querySelectorAll("input[type=text]");
// for (var eachField of formData) {
//     eachField.value = "";
// }



})();