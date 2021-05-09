function usercreate(){
   var username=document.getElementById("username").value;
   var password=document.getElementById("password1").value;
   var password2=document.getElementById("password2").value;
   var email= document.getElementById("email").value;
 if(password!==password2){
     alert("Please enter same password twice ");
 }else{
   var gender="male";
   var selectedh= document.getElementById("horoscope");
   var horoscope = selectedh.options[selectedh.selectedIndex].text;
   var gender;
   var q=document.getElementsByName('gender');
   if(q[0].checked){
       gender="female";
   }else{
       gender="male";
   }
   
    var user={"name":username,"password":password,"email":email,"birthday":document.getElementById("birthday").value,"gender":gender,"horoscope":horoscope};
    if(localStorage.getItem("userlist")!==null){
        var myuserlist=JSON.parse(localStorage.getItem("userlist"));
        var usercount=0;
    for (let i=0;i<myuserlist.length;i++){
       if (username == myuserlist[i].name){
           usercount++;
           alert("There is another user using same username");
       }
       else if(email == myuserlist[i].email){
           usercount++;
           alert("There is another user using same email");
       }
    }
    if(usercount==0){
        myuserlist.push(user);
        localStorage.setItem("userlist",JSON.stringify(myuserlist));
        localStorage.setItem("userin",JSON.stringify(user));
     
    }

    }else {
    
        var myuserlist=[];

             
                myuserlist.push(user);
                localStorage.setItem("userlist",JSON.stringify(myuserlist));
                localStorage.setItem("userin",JSON.stringify(user));
        
     
   
    }
    

 }

}

