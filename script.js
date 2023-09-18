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

    
let noOfBoxes = 0;
for (let i = 0; i < 257; i++) {
    
    const gridBox = document.createElement("div");
    gridBox.className = "gridBox";
    noOfBoxes += 1;
    
    

    if (noOfBoxes <= 16) {
        container1.appendChild(gridBox);
        
    }

    else if (noOfBoxes <= 32) {
        container2.appendChild(gridBox);
    }
  
    else if (noOfBoxes <= 48) {
        container3.appendChild(gridBox);
    }

    else if (noOfBoxes <= 64) {
        container4.appendChild(gridBox);
    }

    else if (noOfBoxes <= 80) {
        container5.appendChild(gridBox);
    }

    else if (noOfBoxes <= 96) {
        container6.appendChild(gridBox);
    }

    else if (noOfBoxes <= 112) {
        container7.appendChild(gridBox);
    }

    else if (noOfBoxes <= 128) {
        container8.appendChild(gridBox);
    }

    else if (noOfBoxes <=  144) {
        container9.appendChild(gridBox);
    }

    else if (noOfBoxes <= 160) {
        container10.appendChild(gridBox);
    }

    else if (noOfBoxes <= 176) {
        container11.appendChild(gridBox);
    }

    else if (noOfBoxes <= 192) {
        container12.appendChild(gridBox);
    }

    else if (noOfBoxes <= 208) {
        container13.appendChild(gridBox);
    }

    else if (noOfBoxes <= 224) {
        container14.appendChild(gridBox);
    }

    else if (noOfBoxes <= 240) {
        container15.appendChild(gridBox);
    }

    else if (noOfBoxes <= 256) {
        container16.appendChild(gridBox);
    }

}