//Immediately Invoked Function Expressions (IIFE)

//iife declareation ==> ()()
(function printText(){
    //named IIFE
    console.log("Welcome user1")
})();
((name)=>{console.log(`welcomeback ${name} !`)})("Vardhan")