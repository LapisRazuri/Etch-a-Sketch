    const btn = document.createElement("button");
    const magicalBtn = document.createElement("button");
    const clearGridBtn = document.createElement("button");
    const gridBoxes = document.querySelectorAll('.gridBoxes')
    const body = document.querySelector("body");
    const btnContainer = document.createElement("div");
    const gridContainer = document.createElement("div");
    const container = [];
    let firstClick = true;
    let isDrawing = false;
    let magicalBtnFirstClick = true;

    body.appendChild(btnContainer);
    body.appendChild(gridContainer);
    btnContainer.appendChild(btn);
    btnContainer.appendChild(magicalBtn);
    btnContainer.appendChild(clearGridBtn);
    


    btn.className ="btns";
    gridContainer.className ="gridContainer";
    btnContainer.className = "btnContainer";
    magicalBtn.className = "btns";
    clearGridBtn.className = "btns";
    


    
    btn.textContent = "Create a new drawing pad";  
    magicalBtn.textContent = "Magical color"; 
    clearGridBtn.textContent = "Clear grid";
    

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
                gridContainer.style.visibility = "visible";

                for (let i = 0; i < userInput; i++) {
                    container[i] = document.createElement("div");
                    gridContainer.appendChild(container[i]);
                    container[i].className ="containers";
                    container[i].style.visibility = "visible";
            
                    for (let j = 0; j < userInput; j++) {
                        let gridBox = document.createElement("div");
                        gridBox.className ="gridBoxes"; 
                        gridBox.style.visibility = "visible";
                        container[i].appendChild(gridBox);
                        draw(gridBox);
                        clearGrid(gridBox);
                        
                        
                        }
                    }

                  

                magicalBtn.addEventListener('click', function () {
                    if (magicalBtnFirstClick == false) {
                        magicalBtnFirstClick = true
                        }

                    else if (magicalBtnFirstClick == true) {
                        magicalBtnFirstClick = false
                        }
                        });


                    

                function draw(box) {
                    gridContainer.addEventListener('mousedown', () => {
                        isDrawing = true;
                        box.addEventListener('mouseover', function (){
                            if (isDrawing == true) {
                                box.classList.add("black-background");
                                if (magicalBtnFirstClick == false) {
                                    box.style.backgroundColor = randomColorGenerator();
                                    }
                    
                                }
                                
                                    
                                })
                            });
        
                document.addEventListener('mouseup', () => {
                    isDrawing = false;
                    });
                }

        
            
                function randomColorGenerator () {
                    const randomR = Math.floor(Math.random() * 106) + 150;
                    const randomG = Math.floor(Math.random() * 106) + 150;
                    const randomB = Math.floor(Math.random() * 106) + 150;
            
                    const randomColor = `rgb(${randomR},${randomG},${randomB})`;
            
                    return randomColor;
                    };
              

                
        
                
                
                
                 

                function clearGrid (eachbox) {
                    clearGridBtn.addEventListener('click', function () {
                        eachbox.style.backgroundColor = "aqua"; 
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

       
                    
       

        
        

        