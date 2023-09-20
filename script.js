    const btn = document.createElement("button");
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    const container = [];
    const gridBox = [];
    let firstClick = true;

    body.appendChild(btn);
    body.appendChild(gridContainer);

    btn.className ="btn";
    gridContainer.className ="gridContainer";


    
    btn.textContent = "Create a new drawing pad";  
    
        btn.addEventListener('click', function () {
            if (firstClick) {
                const userInput = prompt
                ("Enter the number of squares (max 100) per side for the new grid.");

                if (isNaN(userInput)) {
                    alert("Invalid input. Please enter a mumber.")
                    }

                else if (userInput > 101) {
                    alert("The number should not be bigger than 100.")
                    }

                else {
                    for (let i = 0; i < userInput; i++) {
                        container[i] = document.createElement("div");
                        gridContainer.appendChild(container[i]);
                        container[i].className ="containers";
                
                        for (let j = 0; j < userInput; j++) {
                            gridBox[j] = document.createElement("div");
                            gridBox[j].className ="gridBoxes"; 
                            container[i].appendChild(gridBox[j]);
                            addMouseoverListener(gridBox[j]);
                            }
                        }

                    function addMouseoverListener(box) {
                        box.addEventListener('mouseover', function (){
                        box.classList.add("black-background")
                            })
                        }
                    } 
            
                firstClick = false;   
                } 

            else {
                gridContainer.innerHTML = '';
                firstClick = true; 
                }
            
            });
    

   

    
