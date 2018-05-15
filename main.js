`use strict`;

const app = document.createElement(`div`);
app.setAttribute(`id`, `app`);

for(let i=0; i<300; i++){
    const mydiv = document.createElement(`div`);
    app.appendChild(mydiv);
}

document.body.appendChild(app);

const divs = document.querySelectorAll("#app div");

divs.forEach(function(div){

    // div.style.transform =`translate(50vw, 50vh)`;
    div.addEventListener("mouseenter", function(){
        div.style.transform =`translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        div.style.backgroundColor = `hsl(${Math.random()*360},${Math.random()*100}%  ,50%)`;
        //#FF1234, rgb(0, 123, 345), hsl(hue360, saturation12%, lightness12%)
    })
})
