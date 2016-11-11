var CandleValue = 70;
var used = false;
var CandleImgOff;
var CandleImgOnA;
var CandleImgOnB;
var lit = false;
var count = 1;
var timer = 3/8;

CandleValue = Cookies.get('candleLeft');

$("#switch").click(function () {
    
    if(lit) {
        
        lit = false;
        $("#switch").attr("src","img/Switch0n.png");
        
    } else if (!lit && CandleValue > 0) {
        
        lit = true;
        $("#switch").attr("src","img/Switch0ff.png");
        used = true;
        Cookies.set('used', used);
        
    }
    
});

setInterval(function () {
    
    CandleCookie();
    

    
    if(lit) {
        
        TurnOn();
        
        if(count == 1) {
            count = 0;
            
        } else if(count == 0) {
            count = 1;
            
        }
        
        console.log (count);
        
        CandleValue = CandleValue - 1;
        
        if(CandleValue == 0) {
            
            lit = false;
            TurnOff();
            
        }
        
        console.log("Candle Left: " + CandleValue);
        
    } else if (!lit) {
        
        TurnOff();
        
    }
    
    Candle();
    
}, 0.5 * 1000);

function TurnOff () {
    
    $("#background").removeClass("light");
    $("#background").addClass("dark");
    $("#text").removeClass("visible");
    $("#text").addClass("notVisible");
    $("#textDark").addClass("visible");
    $("#textDark").removeClass("notVisible");
}

function TurnOn () {
    
    $("#background").removeClass("dark");
    $("#background").addClass("light");
    $("#text").removeClass("notVisible");
    $("#text").addClass("visible");
    $("#textDark").removeClass("visible");
    $("#textDark").addClass("notVisible");
}

function Candle () {
    

    if(CandleValue >= 60) {
        if(!lit) {
            $("#img").attr("src","img/CandleOff5.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1A.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2A.png");
                
            }
            
        }
        
    }

    if(59 > CandleValue && CandleValue > 50) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffB.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1B.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2B.png");
                
            }
            
        }
        
    }
    
    if(50 >= CandleValue && CandleValue > 40) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffC.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1C.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2C.png");
                
            }
            
        }
        
    }
    
    if(40 >= CandleValue && CandleValue > 30) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffD.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/COn1D.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/COn2D.png");
                
            }
            
        }
        
    }
    
    if(30 >= CandleValue && CandleValue > 20) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffE.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1E.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2E.png");
                
            }
            
        }
        
    }
    
    if(20 >= CandleValue && CandleValue > 10) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffF.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1F.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2F.png");
                
            }
            
        }
        
    }
    
    if(10 >= CandleValue && CandleValue > 0) {
        if(!lit) {
            $("#img").attr("src","img/CandleOffG.png");
            
        } else if (lit) {
            if(count == 1) {
                $("#img").attr("src","img/CandleOn1G.png");
                
            } else if (count == 0) {
                $("#img").attr("src","img/CandleOn2G.png");
                
            }
            
        }
        
    }
    
    if(CandleValue == 0) {
        $("#img").attr("src","img/CandleOffH.png");
        
    }
}

function CandleCookie () {
    Cookies.set('candleLeft', CandleValue);
    
}