    const btn = document.createElement("button");
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    const container3 = document.createElement("div");
    const container4 = document.createElement("div");
    const container5 = document.createElement("div");
    const container6 = document.createElement("div");
    const container7 = document.createElement("div");
    const container8 = document.createElement("div");
    const container9 = document.createElement("div");
    const container10 = document.createElement("div");
    const container11 = document.createElement("div");
    const container12 = document.createElement("div");
    const container13 = document.createElement("div");
    const container14 = document.createElement("div");
    const container15 = document.createElement("div");
    const container16 = document.createElement("div");
    
    body.appendChild(btn);
    body.appendChild(gridContainer);
    gridContainer.appendChild(container1);
    gridContainer.appendChild(container2);
    gridContainer.appendChild(container3);
    gridContainer.appendChild(container4);
    gridContainer.appendChild(container5);
    gridContainer.appendChild(container6);
    gridContainer.appendChild(container7);
    gridContainer.appendChild(container8);
    gridContainer.appendChild(container9);
    gridContainer.appendChild(container10);
    gridContainer.appendChild(container11);
    gridContainer.appendChild(container12);
    gridContainer.appendChild(container13);
    gridContainer.appendChild(container14);
    gridContainer.appendChild(container15);
    gridContainer.appendChild(container16);
    

   
    gridContainer.className ="gridContainer";
    btn.className ="btn";
    container1.className ="container1";
    container2.className ="container2";
    container3.className ="container3";
    container4.className ="container4";
    container5.className ="container5";
    container6.className ="container6";
    container7.className ="container7";
    container8.className ="container8";
    container9.className ="container9";
    container10.className ="container10";
    container11.className ="container11";
    container12.className ="container12";
    container13.className ="container13";
    container14.className ="container14";
    container15.className ="container15";
    container16.className ="container16";

    btn.textContent = "Create a new drawing pad";  
    btn.addEventListener('click', function () {
        const userInput = prompt
        ("Enter the number of squares (max 100) per side for the new grid.");

    let noOfBoxes = 0;

    for (let i = 0; i < userInput * userInput; i++) {
        
        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.addEventListener('mouseover', function (){
            gridBox.classList.add("black-background");
        });

        noOfBoxes += 1;     
        

        if (noOfBoxes <= userInput) {
            container1.appendChild(gridBox);
            
        }

        else if (noOfBoxes <= userInput * 2) {
            container2.appendChild(gridBox);
        }
    
        else if (noOfBoxes <= userInput * 3) {
            container3.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 4) {
            container4.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 5) {
            container5.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 6) {
            container6.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 7) {
            container7.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 8) {
            container8.appendChild(gridBox);
        }

        else if (noOfBoxes <=  userInput * 9) {
            container9.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 10) {
            container10.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 11) {
            container11.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 12) {
            container12.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 13) {
            container13.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 14) {
            container14.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 15) {
            container15.appendChild(gridBox);
        }

        else if (noOfBoxes <= userInput * 16) {
            container16.appendChild(gridBox);
        }

    }


    });

    
