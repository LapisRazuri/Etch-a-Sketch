    const btn = document.createElement("button");
    const magicalBtn = document.createElement("button");
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
    


    btn.className ="btn";
    gridContainer.className ="gridContainer";
    magicalBtn.className = "magicalBtn";
    btnContainer.className = "btnContainer";


    
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
                            changeToMagicalColor(gridBox[j])
                            }
                        }

                    function addMouseoverListener(box) {
                        box.addEventListener('mouseover', function (){
                        box.classList.add("black-background");
                            })
                        }   

                    function randomColorGenerator () {
                        const randomR = Math.floor(Math.random() * 256);
                        const randomG = Math.floor(Math.random() * 256);
                        const randomB = Math.floor(Math.random() * 256);
                
                        const randomColor = `rgb(${randomR},${randomG},${randomB})`;
                
                        return randomColor;
                        }



                    function  changeToMagicalColor (item) {
                        magicalBtn.addEventListener('click', function () {
                            item.addEventListener('mouseover', function() {
                            item.style.backgroundColor = randomColorGenerator();
                                })
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



    
   
    magicalBtn.textContent = "Magical color";  

    
