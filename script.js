    const btn = document.createElement("button");
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    const container = [];
    const gridBox = [];

    body.appendChild(btn);
    body.appendChild(gridContainer);

    btn.className ="btn";
    gridContainer.className ="gridContainer";


    
    btn.textContent = "Create a new drawing pad";  
    btn.addEventListener('click', function () {
        const userInput = prompt
        ("Enter the number of squares (max 100) per side for the new grid.");


            for (let i = 0; i < userInput; i++) {
                container[i] = document.createElement("div");
                gridContainer.appendChild(container[i]);
                container[i].className ="containers";
        
                for (let j = 0; j < userInput; j++) {
                    gridBox[j] = document.createElement("div");
                    container[i].appendChild(gridBox[j]);
                    gridBox[j].className ="gridBoxes";

                    gridBox[j].addEventListener('mouseover', function (){
                        gridBox[j].classList.add("black-background");
                        });
                    
                }
            }
         
        
});

    
