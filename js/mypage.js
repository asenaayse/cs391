function textapprovalformypage(){
    if(localStorage.getItem("userin")==null){
        document.getElementById("textarea").innerHTML=
        " <br> <br> Please sign in first ! <br>"  +
        " <a href=signin.html> Sign in </button> <br> <br> ";

       
    }else {
        var myuser=JSON.parse(localStorage.getItem("userin"));
        document.getElementById("textarea").innerHTML= 
        "<br> <br>"+
        "<b> Username  : "+myuser.name +"<br>"+
        "<b> e-mail : "+myuser.email+"<br>"+
        "<b> Gender  : "+myuser.gender+"<br>"+
        "<b> Birthday  : "+myuser.birthday+"<br>"+
        "<b> Horoscope  : "+myuser.horoscope+"<br> <br>"+
       " <img src=https://data.whicdn.com/images/111808823/original.jpg lentgh=2000 width=400>"

        
      
        }
    }


