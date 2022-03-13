const manuBtn =document.getElementById('menuBtn');
const sideNave = document.getElementById('sidenab');
sideNave.style.right ="-250px"
    manuBtn.onclick = function(){
    if(sideNave.style.right =="-250px"){
        sideNave.style.right ="0"
    }
    else{
        sideNave.style.right ="-250px";
    }
}