var count =0;
function menuPop(){
    
    var menu = document.getElementById("menu");
    
    if(count===0){
        menu.style.display='block';
        menu.style.height='7vh';
        count = 1;
    }
    else{
        menu.style.display='hidden';
        menu.style.height='0';
        count =0;
    }
}