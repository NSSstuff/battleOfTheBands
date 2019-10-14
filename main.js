console.log("listening to G-Eazy at the moment.");

/*
    let bandNumber = 1;

    const takeNumber = bandName => {
        bandNumber ++;
        return `${bandNumber - 1}. ${bandName}`
    }

    const scum = takeNumber("Galactic Scum")
    console.log(scum)  // This should print "1. Galactic Scum" in the console

    const under = takeNumber("Underdogs")
    console.log(under)  // This should print "2. Underdogs" in the console
*/
let bandNumber = 1;


// define all variables
const saveButton = document.getElementById("save--button");
const band = document.querySelector("#band");
const resultsContainer = document.getElementById("bandResults");

// define event handlers & set them 
const handleSaveButton = event => {
    let bandName = document.querySelector("#band");
    console.log(bandNumber +"." + bandName.value)
    
    resultsContainer.innerHTML = `${bandNumber}. ${bandName.value}`;
    // increase the bandNumber
    bandNumber ++;

}

saveButton.addEventListener("click", handleSaveButton);