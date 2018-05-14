`use strict`;

const divs = document.querySelectorAll(`#app div`);

divs.forEach(function(){
    //div.style.transform = `translate(50vw, 50vh)`;
    div.addEventlistener(`click`, function(){
        div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh`);
        div.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}, 50%)`;
    })
})