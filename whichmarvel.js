function displayRadioValue(){
    var q1=document.getElementsByName('Q1');
    var q2=document.getElementsByName('Q2');
    var q3=document.getElementsByName('Q3');
    var q4=document.getElementsByName('Q4');
    var q5=document.getElementsByName('Q5');
    var q6=document.getElementsByName('Q6');
    var storeanswer= [0,0,0,0,0,0,0]; // 0:Thor 1:IronMam 2:CaptainAmerica 3:BlackWidow 4:Hulk 5:SpiderMan 6:BlackPanther
    if(q1[0].checked){
        storeanswer[2]+=10;
    }else if(q1[1].checked){
        storeanswer[1]+=10;
        storeanswer[6]+=10;
    } else if(q1[2].checked){
        storeanswer[0]+=10;
        storeanswer[5]+=10;
    }else if(q1[3].checked){
        storeanswer[4]+=10;
        storeanswer[3]+=10;
        
    }
    if(q2[0].checked){
        storeanswer[0]+=10;
        storeanswer[3]+=10;
    }else if(q2[1].checked){
        storeanswer[2]+=10;
        storeanswer[4]+=10;
    } else if(q2[2].checked){
        storeanswer[5]+=10;
    }else if(q2[3].checked){
        storeanswer[1]+=10;
        storeanswer[6]+=40;
    }
    if(q3[0].checked){
        storeanswer[1]+=10;
    }else if(q3[1].checked){
        storeanswer[3]+=10;
        storeanswer[5]+=10;
    } else if(q3[2].checked){
        storeanswer[0]+=10;
        storeanswer[4]+=10;
    }else if(q3[3].checked){
        storeanswer[2]+=10;
        storeanswer[6]+=10;
    }

    // 0:Thor 1:IronMam 2:CaptainAmerica 3:BlackWidow 4:Hulk 5:SpiderMan 6:BlackPanther
    if(q4[0].checked){
        storeanswer[2]+=10;
        storeanswer[6]+=10;
        storeanswer[5]+=10;        
    }else if(q4[1].checked){
        storeanswer[3]+=10;
    } else if(q4[2].checked){
        storeanswer[1]+=10;
        storeanswer[4]+=10;
    }else if(q4[3].checked){
        storeanswer[0]+=10;       
    }

    if(q5[0].checked){
        storeanswer[0]+=10;
    }else if(q5[1].checked){
        storeanswer[2]+=10;
        storeanswer[6]+=10;
    } else if(q5[2].checked){
        storeanswer[4]+=10;
    }else if(q5[3].checked){
        storeanswer[1]+=10;
        storeanswer[3]+=10;
        storeanswer[5]+=10;
    }
    if(q6[0].checked){
        storeanswer[2]+=10;
        storeanswer[4]+=10;
    }else if(q6[1].checked){
        storeanswer[0]+=10;
        storeanswer[1]+=10;
        storeanswer[5]+=40;
        storeanswer[6]+=10;
    } else if(q6[2].checked){
        storeanswer[3]+=10;
    }

    var maximumelement=0;
    var maxindex=0;
    for(var i=0;i<storeanswer.length;i++){
if(storeanswer[i]>maximumelement){
maximumelement=storeanswer[i];
maxindex=i;
}
    }
   


if(maxindex==0){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE MIGHTY THOR! </font>' +"<br>"
    +"<img src=thor.png width=1000 length=1000 >";
  }else if(maxindex==1){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE INVINCIBLE IRON MAN! </font>' +"<br>"
    +"<img src=ironman.png width=1000 length=1000 >";
}else if(maxindex==2){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE CAPTAIN AMERICA! </font>' +"<br>"
    +"<img src=captainamerica.png width=1000 length=1000 >";
}else if(maxindex==3){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE BLACK WIDOW! </font>' +"<br>"
    +"<img src=blackwidow.png width=1000 length=1000 >";
}else if(maxindex==4){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE INCREDIBLE HULK! </font>' +"<br>"
    +"<img src=hulk.png width=1000 length=1000 >";
}else if(maxindex==5){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE AMAZING SPIDERMAN! </font>' +"<br>"
    +"<img src=spiderman.png width=1000 length=1000 >";
} else if(maxindex==6){
    document.getElementById("result").innerHTML='<font size="40">"YOU ARE THE BLACK PANTHER! </font>' +"<br>"
    +"<img src=blackpanther.png width=1000 length=1000 >";
}
}
