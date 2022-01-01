function refreshh() {
    window.location.reload();
}


//Generate Mechanism
function GenerateIMAGE(gen) {
    var outputan = document.getElementById("pasteTXT").value;
    var backimg = document.getElementById("urlPASTE").value;
    while (outputan.length <= 19000) {
        outputan += outputan;
    }
    document.getElementById("outputjs").innerHTML = outputan;
    document.getElementById('outputjs').style.backgroundImage = "url("+backimg+")";
    document.getElementById("outputjs").style.backgroundAttachment = "fixed"; 
    document.getElementById("outputjs").style.backgroundRepeat = "no-repeat";

    
    // URL BACKGROUND
    document.getElementById("outputcontainer").style.display = "flex";
    document.getElementById("outputcontainer").style.justifyContent = "center";
    document.getElementById("outputcontainer").style.alignItems = "center";
    document.getElementById("outputjs").style.height= "auto";
    document.getElementById("outputcontainer").style.overflow = "hidden";
}

//Gray Scaling Function
function greyscaling() {
    var grayscaling = document.getElementById("checkbox")
    document.getElementById("outputjs").style.filter = grayscaling.checked ? "grayscale(100)" : "none";
}

//Background Options Function
function backgroundfunc() {

    var coverval = document.getElementById("bgCOVER");
    document.getElementById("outputjs").style.backgroundSize = coverval.checked? "cover" : "none"

    var autoval = document.getElementById("bgAUTO");
    document.getElementById("outputjs").style.webkitBackgroundSize = autoval.checked ? "auto" : "none";

    var containval = document.getElementById("bgCONTAIN");
    document.getElementById("outputjs").style.backgroundSize = containval.checked ? "contain" : "none";
} 
