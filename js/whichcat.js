function displayRadioValueCat(){
    var q1=document.getElementsByName('Q1');
    var q2=document.getElementsByName('Q2');
    var q3=document.getElementsByName('Q3');
    var q4=document.getElementsByName('Q4');
    var q5=document.getElementsByName('Q5');
    var storeanswer= [0,0,0,0];
    
    if(q1[0].checked){
        storeanswer[0]+=50;
        storeanswer[1]+=30;
    }else if(q1[1].checked){
        storeanswer[0]+=30;
        storeanswer[1]+=50;
    } else if(q1[2].checked){
        storeanswer[2]+=50;
        storeanswer[3]+=30;
    }else if(q1[3].checked){
        storeanswer[3]+=40;
    }
    
    if(q2[0].checked){
        storeanswer[0]+=30;
    }else if(q2[1].checked){
        storeanswer[1]+=50;
    } else if(q2[2].checked){
        storeanswer[2]+=50;
        storeanswer[3]+=30;
    }else if(q2[3].checked){
        storeanswer[0]+=10;
        storeanswer[3]+=40;
    }
    
    if(q3[0].checked){
        storeanswer[0]+=30;
        storeanswer[1]+=40;
    }else if(q3[1].checked){
        storeanswer[1]+=40;
    } else if(q3[2].checked){
        storeanswer[2]+=50;
    }else if(q3[3].checked){
        storeanswer[3]+=10;
    }
    if(q4[0].checked){
        storeanswer[1]+=40;
        storeanswer[3]+=30;
    }else if(q4[1].checked){
        storeanswer[1]+=50;
    } else if(q4[2].checked){
        storeanswer[0]+=10;
        storeanswer[2]+=40;
    }else if(q4[3].checked){
        storeanswer[3]+=40;
    }
    if(q5[0].checked){
        storeanswer[0]+=20;
    }else if(q5[1].checked){
        storeanswer[1]+=40;
        storeanswer[3]+=30;
    } else if(q5[2].checked){
        storeanswer[2]+=50;
    }else if(q5[3].checked){
        storeanswer[3]+=45;
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
    document.getElementById("result").innerHTML="You are Siamese Cat! <br>"
    +"You live a systematic life, while not missing enjoying little things. You are an honest and dependable person. <br>"
    +"<img https://beyinsizler.net/wp-content/uploads/2020/06/siyam-kedileri_2.jpg width=400 length=1000  >";
  }else if(maxindex==1){
    document.getElementById("result").innerHTML="You are a Tabby Cat! <br>"+
    +"You enjoy simple things, you are a generally happy person. Sometimes you miss the good old days, however you are always excited about the future! <br> "
    +"<img src=https://i.pinimg.com/236x/f3/15/1f/f3151f6d8566b179ddafe5962e74a1a6.jpg width=400 length=1000 >";
}else if(maxindex==2){
    document.getElementById("result").innerHTML="You are a Sphynx Cat! <br>"+
    +"Even if you may seem a little cold on the first gaze, you are a very friendly and warm person. Fun fact: The name 'Sphynx' comes  the famous cat-like statue in Egypt! <br>"
    +"<img src=https://ae01.alicdn.com/kf/H022fdde4e68a4daea7ecc7d22d0eb20cX/Kedi-giysileri-k-s-cak-yumu-ak-kediler-s-cak-Hoodies-pijama-Sphynx-kedi-kost-mleri.jpg_q50.jpg width=400 length=1000 >";
}else if(maxindex==3){
    document.getElementById("result").innerHTML="You are a Van Cat! <br>"+
   "You have a very unique and outstanding character and your friends love you for it. You are usually calm and kind but, you get really angry when something happens to your friends and honestly, we wouldn't want to see you angry! <br>"
   +"<img src=http://www.yildirimveteriner.com/wp-content/uploads/2019/01/van-kedisi.jpg width=400 length=1000 >";
}
}
