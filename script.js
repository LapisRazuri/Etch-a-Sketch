    const btn = document.createElement("button");
    const magicalBtn = document.createElement("button");
    const clearGridBtn = document.createElement("button");
    const gridBoxes = document.querySelectorAll('.gridBoxes')
    const body = document.querySelector("body");
    const btnContainer = document.createElement("div");
    const gridContainer = document.createElement("div");
    const container = [];
    const scaleBarContainer = document.createElement("div");
    const scaleBar = document.createElement("div");
    let isDrawing = false;
    let magicalBtnFirstClick = true;
    let isChangingGridIndex = false;
    

    body.appendChild(btnContainer);
    body.appendChild(gridContainer);
    btnContainer.appendChild(btn);
    btnContainer.appendChild(magicalBtn);
    btnContainer.appendChild(clearGridBtn);
    btnContainer.append(scaleBarContainer);
    scaleBarContainer.append(scaleBar);
    


    btn.className ="btns";
    gridContainer.className ="gridContainer";
    btnContainer.className = "btnContainer";
    magicalBtn.className = "btns";
    clearGridBtn.className = "btns";
    scaleBarContainer.className = "scaleBarContainer";
    scaleBar.className = "scaleBar";
    


    
    btn.textContent = "Create a new drawing pad";  
    magicalBtn.textContent = "Magical color"; 
    clearGridBtn.textContent = "Clear grid";
    

    btn.addEventListener('click', function () {
            gridContainer.innerHTML = '';            //Deletes the previous content everytime the butten is clicked.
            const userInput = prompt
            ("Enter the number of squares (max 100) per side for the new grid.");


            if (isNaN(userInput)) {
                alert("Invalid input. Please enter a mumber.")
            }

            else if (userInput > 100) {
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


                function draw(box) {
                    gridContainer.addEventListener('mousedown', () => {
                        isDrawing = true;
                        box.addEventListener('mouseover', function (){
                            if (isDrawing == true) {
                                box.style.backgroundColor = "black";                                            
                                // box.classList.add("black-background");      //If classList, black → rainbow → black  won't work. The black will not over color the rainbow. 
                                    if (magicalBtnFirstClick == false) {       //My thought, style is precedent over classList. But fact classList is precedent over style.
                                        box.style.backgroundColor = randomColorGenerator();
                                    }
                            }
                        })
                    });
        
                    document.addEventListener('mouseup', () => {  
                        isDrawing = false;                                     //Stops mouseover when the mouse is up.
                    });
                }

                function clearGrid (eachbox) {
                    clearGridBtn.addEventListener('click', function () {
                        eachbox.style.backgroundColor = "aqua"; 
                        draw(eachbox);                                         //Change back ground color of grid (to be able to draw) after clearing the grid.
                    })
                }

            } 
        
    });


    function randomColorGenerator () {
        const randomR = Math.floor(Math.random() * 106) + 150;
        const randomG = Math.floor(Math.random() * 106) + 150;
        const randomB = Math.floor(Math.random() * 106) + 150;

        const randomColor = `rgb(${randomR},${randomG},${randomB})`;

        return randomColor;
    };



    magicalBtn.addEventListener('click', function () {
        if (magicalBtnFirstClick == false) {
            magicalBtnFirstClick = true
            }

        else if (magicalBtnFirstClick == true) {
            magicalBtnFirstClick = false
            }
    });

// //
//     scaleBar.addEventListener("mousedown", (e) => {
//         isChangingGridIndex = true;

//         scaleBarContainer.addEventListener("mousemove", (e) => {
//             let x = e.clientX + 'px';
//             let y = e.clientY + 'px';
//             let scaleBarContainerRect = scaleBarContainer.getBoundingClientRect();
//             let scaleBarRect = scaleBar.getBoundingClientRect();


//             if( (e.clientX >= scaleBarContainerRect.left && (e.clientX+scaleBarRect.width <= scaleBarContainerRect.right)) &&
//                 (e.clientY >= scaleBarContainerRect.top && (e.clientY+draggableRect.height <= scaleBarContainerRect.bottom)) 
//                 //+draggableRect.height and +draggableRect.height accounts for the size of ball itself
//             )
            
//                 {scaleBar.style.left = `${e.clientX}px`;
//                 scaleBar.style.top = `${e.clientY}px`;
//                 }
  

//             scaleBar.style.left = x;
//             scaleBar.style.top = y;
//         })


        
//     })

//     scaleBarContainer.addEventListener("mousemove", (e) => {
//         const clientX = e.clientX;
//         console.log("Mouse X-coordinate within the div:", clientX);
//     });







//     // scaleBar.addEventListener("mousedown", (e) => {
//     // isChangingGridIndex = true;
//     // const initialX = e.clientX;
//     // const initialWidth = parseFloat(getComputedStyle(gridContainer).width);

//     // document.addEventListener("mousemove", handleGridChange );
//     // document.addEventListener("mouseup", () => {
//     //     isChangingGridIndex = false;
//     //     document.removeEventListener("mousemove", handleGridChange);
//     // })


//     // function handleGridChange(e) {
//     //     if (isChangingGridIndex) {
//     //         const newWidth = initialWidth + (e.clientX - initialX);
//     //         if (newWidth >= 10 && newWidth <= 90) {
//     //             // Adjust the range of widths as needed
//     //             gridContainer.style.width = newWidth + "%";
//     //             scaleBar.style.left = (newWidth / 2) + "%";
//     //         }
//     //     }
//     // };

//     // });

  

        