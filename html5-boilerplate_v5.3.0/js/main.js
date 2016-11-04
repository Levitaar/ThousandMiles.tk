var lit = true;
var count = 1;
var timer = 3/8;

$("#switch").click(function () {
    
    if(lit) {
        
        $("#img").attr("src","img/CandleOff5.png");
        $("#background").removeClass("light");
        $("#background").addClass("dark");
        lit = false;
        count = 0;
        
    }
    
    
    
});

setInterval(function () {
    
    if(lit) {
        
        if(count = 1) {
            
            $("#img").attr("src","img/CandleOn2.png");
            count = 2;
            
            console.log(count);
        }
        
    }
    
    console.log("2");
    
}, 1/2 * 1000);

setInterval(function () {
    
    if(lit) {
        
        if(count = 2) {
            
            $("#img").attr("src","img/CandleOn1.png");
            count = 1;
            
            console.log(count);
        }
        
    }
    

    
}, 1 * 1000);
