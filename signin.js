function useradd(){
   if(localStorage){
   localStorage.setItem("userin",document.getElementById("username").value);
}
}else{
   alert("Sorry,your browser do not support local storage"
}
function setUser() {
      if(localStorage){
    if(localStorage.getItem("userin")!==null){
        document.getElementById("navbar-content-right").innerHTML=
        " <a href=#><i class=fa fa-fw fa-user></i> "+localStorage.getItem("userin")+"</a> "+
        " <a  onclick=userout() ><i class=fa fa-fw fa-user  ></i> Sign Out</a> "
       
    }else {
    document.getElementById("navbar-content-right").innerHTML=
    ' <a href="signup.html"><i class=fa fa-fw fa-user></i> Sign Up</a> '+
    ' <a href="signin.html"><i class=fa fa-fw fa-user></i> Sign In</a> '
    }
      }
}

function userout(){
localStorage.removeItem("userin");
window.location.reload(false);

}
