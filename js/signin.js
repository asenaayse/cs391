function useradd(){
    var result=checkuser();
if(result!==null){
    localStorage.setItem("userin",JSON.stringify(result));
    
}else{
    alert("There is no user, with this username/password");
}
}
function setUser() {
    if(localStorage.getItem("userin")!==null){
        var myuser=JSON.parse(localStorage.getItem("userin"));
        document.getElementById("navbar-content-right").innerHTML=
        ' <a href="mypage.html"><i class=fa fa-fw fa-user></i> '+myuser.name+'</a> '+
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

function checkuser(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var myuserlist=JSON.parse(localStorage.getItem("userlist"));
    var user;
    var usercount=0;
    for (let i=0;i<myuserlist.length;i++){
       if (username == myuserlist[i].name && password == myuserlist[i].password){
           usercount++;
           user=myuserlist[i];
       }
    }
    if(usercount>0){
        return user;
    }else{
        return null;
    }
    
 }
