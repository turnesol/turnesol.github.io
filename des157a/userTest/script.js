(function() {
    'use strict'
    console.log("reading js");

    // user test overlay
    document.getElementById('userTestBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('userTestOverlay').className = "userTestOff";
    });

    // cruess opening 
    document.querySelector('#cruess').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('cruessBuildingOverlay').className = "cruessOn";
    });
// cruess closing 
    document.querySelector('.close').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('cruessBuildingOverlay').className = "cruessOff";
    });
// escape cruess
    document.addEventListener('keydown', function(e){
        if(e.key === "Escape"){
            document.getElementById('cruessBuildingOverlay').className = "cruessOff";

            document.getElementById('artOverlay').className = "artOff";

            document.getElementById('memorialUnionOverlay').className = "MUOff";

            document.getElementById('libraryOverlay').className = "libraryOff";

            document.getElementById('siloOverlay').className = "siloOff";
        }
    });

// open art 
    document.querySelector('#art').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('artOverlay').className = "artOn";
    });

// art closing 
    document.querySelector('.closeArt').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('artOverlay').className = "artOff";
    });
// open MU 
    document.querySelector('#memorialUnion').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('memorialUnionOverlay').className = "MUOn";
    });
// closing MU 
    document.querySelector('.closeMU').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('memorialUnionOverlay').className = "MUOff";
});
// open library 
    document.querySelector('#library').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('libraryOverlay').className = "libraryOn";
    });
// closing library 
    document.querySelector('.closeLibrary').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('libraryOverlay').className = "libraryOff";
});
// open silo 
    document.querySelector('#silo').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('siloOverlay').className = "siloOn";
    });
// closing silo 
    document.querySelector('.closeSilo').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('siloOverlay').className = "siloOff";
});

})();