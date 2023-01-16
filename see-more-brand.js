
function see_more(){
    var morebuton = document.getElementById("see-more");
    var more = document.getElementById("brand-more");
    var lessbuton = document.getElementById("see-less");
    if(morebuton.style.display==="none"){
        morebuton.style.display="inline";
        more.style.display="none";
        
    }else{
        morebuton.style.display="none";
        
        more.style.display="inline";
       
    }
}