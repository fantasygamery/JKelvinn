
function e(asd,need = true){
    if (asd === undefined || asd === null && need) {return;}
    else if (asd !== null){ 
    if (asd.substring(0,1)=='#'){
    elem = document.getElementById(asd.substring(1));
    }
    else if (asd.substring(0,1)=='.'){
    
    elem = document.getElementsByClassName(asd.substring(1));
    }
    }
    
    this.remove = function(){
    try{
    if (elem === null || elem === undefined )
    {return;}elem.parentNode.removeChild(elem);}
    catch(z){console.log(z);}
    };
    
    this.get = function(){
    try{
    if (elem === null || elem === undefined )
    {return;}
    else
    return elem;}
    catch(z){console.log(z);}
    };
    
    this.ready = function(func){
    try{
    
    window.onload = func}
    catch(z){console.log(z);}
    };
    
    return this;
    }
    
    
    
