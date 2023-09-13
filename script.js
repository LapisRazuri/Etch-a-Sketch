    gridContainer = document.createElement("div");
    container1 = document.createElement("div");
    container2 = document.createElement("div");
    container3 = document.createElement("div");
    container4 = document.createElement("div");
    container5 = document.createElement("div");
    container6 = document.createElement("div");
    container7 = document.createElement("div");
    container8 = document.createElement("div");
    container9 = document.createElement("div");
    container10 = document.createElement("div");
    container11 = document.createElement("div");
    container12 = document.createElement("div");
    container13 = document.createElement("div");
    container14 = document.createElement("div");
    container15 = document.createElement("div");
    container16 = document.createElement("div");

    body.appendChild(gridContainer);
    gridContainer.appendChild(container1);
    gridContainer.appendChild(container2);
    gridContainer.appendChild(container3);
    gridContainer.appendChild(container4);
    gridContainer.appendChild(container5);
    gridContainer.appendChild(contianer6);
    gridContainer.appendChild(container7);
    gridContainer.appendChild(contianer8);
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

for (let i = 0; i > 256; i++){
    let noOfBoxes = 0;

    div = document.createElement("div")
    div.className = "div";
    noOfBoxes += 1;

    if (noOfBoxes > 16) {
        container1.append(div);
    }

    else if (noOfBoxes > 32) {
        container2.appendChild(div);
    }
  
    else if (noOfBoxes > 48) {
        container3.appendChild(div);
    }

    else if (noOfBoxes > 64) {
        container4.appendChild(div);
    }

    else if (noOfBoxes > 80) {
        container5.appendChild(div);
    }

    else if (noOfBoxes > 96) {
        container6.appendChild(div);
    }

    else if (noOfBoxes > 112) {
        container7.appendChild(div);
    }

    else if (noOfBoxes > 128) {
        container8.appendChild(div);
    }

    else if (noOfBoxes >  144) {
        container9.appendChild(div);
    }

    else if (noOfBoxes > 160) {
        container10.appendChild(div);
    }

    else if (noOfBoxes > 176) {
        container11.appendChild(div);
    }

    else if (noOfBoxes > 192) {
        container12.appendChild(div);
    }

    else if (noOfBoxes > 208) {
        container13.appendChild(div);
    }

    else if (noOfBoxes > 224) {
        container14.appendChild(div);
    }

    else if (noOfBoxes > 240) {
        container15.appendChild(div);
    }

    else if (noOfBoxes > 256) {
        container16.appendChild(div);
    }

}




