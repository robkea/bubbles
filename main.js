"use strict";

// create divs
const app = document.querySelector("#app");

const numberOfBubbles = 10;

for( let i=0; i < numberOfBubbles; i++ ) {
    const div = document.createElement("div");
    app.appendChild(div);
}

app.addEventListener("mouseout", clicked);


function clicked( event ) {
    console.log(event);
    const target = event.target;

    if( target.id === "app" ) {
        // We leave the parent ...

        const ourDiv = event.relatedTarget;
        if( ourDiv != null && ourDiv.parentElement != null && ourDiv.parentElement.id === "app") {
            randomMove(ourDiv);
        }
    }
}

function randomMove(ourDiv) {
    ourDiv.style.transform= `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    ourDiv.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;

}

function createNewBubble() {
    const div = document.createElement("div");
    app.appendChild(div);
    randomMove(div);

}

setInterval( createNewBubble, 1000);