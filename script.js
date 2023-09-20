    const btn = document.createElement("button");
    const magicalBtn = document.createElement("button");
    const clearGridBtn = document.createElement("button");
    const gridBoxes = document.querySelectorAll('.gridBoxes')
    const body = document.querySelector("body");
    const btnContainer = document.createElement("div");
    const gridContainer = document.createElement("div");
    const container = [];
    const gridBox = [];
    let firstClick = true;

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
                        gridBox[j] = document.createElement("div");
                        gridBox[j].className ="gridBoxes"; 
                        gridBox[j].style.visibility = "visible";
                        container[i].appendChild(gridBox[j]);
                        addMouseoverListener(gridBox[j]);
                        changeToMagicalColor(gridBox[j]);
                        clearGrid(gridBox[j]);
                        
                        }
                    }

                function addMouseoverListener(box) {
                    box.addEventListener('mouseover', function (){
                    box.classList.add("black-background");
                        })
                    }   

                function randomColorGenerator () {
                    const randomR = Math.floor(Math.random() * 106) + 150;
                    const randomG = Math.floor(Math.random() * 106) + 150;
                    const randomB = Math.floor(Math.random() * 106) + 150;
            
                    const randomColor = `rgb(${randomR},${randomG},${randomB})`;
            
                    return randomColor;
                    }



                function changeToMagicalColor (item) {
                    magicalBtn.addEventListener('click', function () {
                        item.addEventListener('mouseover', function() {
                        item.style.backgroundColor = randomColorGenerator();
                            })
                        })
                    }


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


       
        




  
