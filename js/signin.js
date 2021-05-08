function useradd(){
   localStorage.setItem("userin",document.getElementById("username").value);
}
function setUser() {
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

function userout(){
localStorage.removeItem("userin");
window.location.reload(false);

}

function textapproval(){
    if(localStorage.getItem("userin")==null){
        document.getElementById("textarea").innerHTML=
        " <br> <br> Please sign in first ! <br>"  +
        " <a href=signin.html> Sign in </button> <br> <br> ";

       
    }else {

        var myHtml = document.getElementById('latersignintext').innerHTML;
        document.getElementById("textarea").innerHTML= myHtml;
    }
}